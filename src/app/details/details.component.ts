import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';


import {
  TdDataTableService,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn,
  IPageChangeEvent
} from '@covalent/core';

import { ReemoHealthService } from '../reemo-health.service';

@Component({
  selector: 'qs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  type: string;
  unfilteredData: any[] = [];
  data: any[] = [];
  columns: ITdDataTableColumn[] = this.columns = [
    { name: 'date', label: 'Date' },
    { name: 'total_stepcount', label: 'Step Count' },
    { name: 'total_distance', label: 'Distance' },
    { name: 'total_calories', label: 'Calories' },
  ];


  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 7;
  sortBy: string = 'date';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  selectedRows: any = [];


  constructor(
    private _dataTableService: TdDataTableService,
    private route: ActivatedRoute,
    private router: Router,
    private reemoData: ReemoHealthService,
  ) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .forEach(event => this.fetchData());
  }

  fetchData() {
    this.unfilteredData = [];
    this.type = this.route.snapshot.params['type'].toLowerCase();

    this.reemoData.fetch().subscribe((data) => {
      this.data = [];
      this.columns = [];
      this.unfilteredData = [];

      for (let day of data) {
        day = day.summary_data;

        if (this.type === 'steps' && day.stepcount) {
          this.unfilteredData.push(day.stepcount);
          this.sortBy = 'date';
          this.data.push(day.stepcount);
          this.columns = [
            { name: 'date', label: 'Date' },
            { name: 'total_stepcount', label: 'Step Count' },
            { name: 'total_distance', label: 'Distance' },
            { name: 'total_calories', label: 'Calories' },
          ];
        } else if (this.type === 'heart' && day.heartrate) {
          this.unfilteredData.push(day.heartrate);
          this.sortBy = 'date';
          this.data.push(day.heartrate);
          this.columns = [
            { name: 'date', label: 'Date' },
            { name: 'average_heartrate', label: 'Average Heart Rate' },
            { name: 'maximum_heartrate', label: 'Maximum Heart Rate' },
            { name: 'minimum_heartrate', label: 'Minimum Heart Rate' },
          ];

        } else if (this.type === 'sleep' && day.sleep) {
          this.unfilteredData.push(day.sleep);
          this.sortBy = 'awakened_date';
          this.data.push(day.sleep);
          this.columns = [
            { name: 'awakened_date', label: 'Awakened Date' },
            { name: 'sleep_time_in_seconds', label: 'Sleep Time (seconds)' },
          ];

        }

      }

      this.filter();
    });

  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
