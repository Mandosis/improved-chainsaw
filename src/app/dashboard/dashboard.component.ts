import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  constructor(private _titleService: Title) {}

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Covalent Quickstart' );
  }
}
