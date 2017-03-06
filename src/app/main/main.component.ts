import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReemoHealthService } from '../reemo-health.service';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  data: any;

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    },
    {
      title: 'Step Count',
      route: 'details/steps',
      icon: 'directions_walk',
    },
    {
      title: 'Heart Rate',
      route: 'details/heart',
      icon: 'favorite',
    },
    {
      title: 'Sleep',
      route: 'details/sleep',
      icon: 'brightness_3',
    },
  ];

  constructor(private _router: Router, reemoHealthService: ReemoHealthService) {
    reemoHealthService.fetch().subscribe((data) => {
      this.data = data;
      console.log('Stuff', data);
    });
  }

  // logout(): void {
  //   this._router.navigate(['/login']);
  // }
}
