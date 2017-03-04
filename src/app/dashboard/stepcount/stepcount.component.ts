import { Component, Input, OnChanges } from '@angular/core';
import { TdDigitsPipe } from '@covalent/core';

import { Stepcount } from './stepcount';

@Component({
  selector: 'qs-stepcount',
  templateUrl: './stepcount.component.html',
  styleUrls: ['./stepcount.component.scss']
})
export class StepcountComponent implements OnChanges {
  stepCountChart: any[] = [];

  distanceChart: any[] = [];
  caloriesChart: any[] = [];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;

  colorScheme: any = {
    domain: ['#1565C0'],
  };

  @Input('data')
  set data(data: Stepcount[]) {
    console.log('data', data);
    if (data) {
      this.stepCountChart = [];
      this.distanceChart = [];
      this.caloriesChart = [];
      for (let day of data) {
        this.stepCountChart.push({
          'name': day.date,
          'value': day.total_stepcount,
        });

        this.distanceChart.push({
          'name': day.date,
          'value': day.total_distance,
        });

        this.caloriesChart.push({
          'name': day.date,
          'value': day.total_calories,
        });

      }

    }
  }

  constructor() { }

  ngOnChanges() {
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }


}
