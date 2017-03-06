import { Component } from '@angular/core';

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
      route: '/details/steps',
      icon: 'directions_walk',
    },
    {
      title: 'Heart Rate',
      route: '/details/heart',
      icon: 'favorite',
    },
    {
      title: 'Sleep',
      route: '/details/sleep',
      icon: 'brightness_3',
    },
  ];

  constructor() {
  }

  // logout(): void {
  //   this._router.navigate(['/login']);
  // }
}
