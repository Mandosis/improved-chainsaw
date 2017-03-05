import { Component, Input, OnChanges } from '@angular/core';
import { TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'qs-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnChanges {
  chartTitle: string;
  chart: any[] = [];
  lastEntry: any;
  lastEntryComparison: boolean;

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
  set data(data: any) {
    if (data) {
      this.chart = [];
      for (let day of data) {
        if (day.total_stepcount) {
          this.chart.push({
            'name': day.date,
            'value': day.total_stepcount,
          });

          this.chartTitle = 'Step Count';
        } else if (day.average_heartrate) {
          this.chart.push({
            'name': day.date,
            'value': day.average_heartrate,
          });

          this.chartTitle = 'Average Heart Rate';

        } else if (day.awakened_date) {
          this.chart.push({
            'name': day.awakened_date,
            'value': day.sleep_time_in_seconds,
          });

          this.chartTitle = 'Sleep Time';

        }

      }
      this.lastEntry = data[data.length - 1];
      this.lastEntryComparison = data[data.length - 2];
      this.chart = this.chart.slice(this.chart.length - 7, this.chart.length);

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
