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
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
    // {
    //   title: 'Product Dashboard',
    //   route: '/product',
    //   icon: 'view_quilt',
    // }, {
    //   title: 'Product Logs',
    //   route: '/logs',
    //   icon: 'receipt',
    // }, {
    //   title: 'Manage Users',
    //   route: '/users',
    //   icon: 'people',
    // }, {
    //   title: 'Covalent Templates',
    //   route: '/templates',
    //   icon: 'view_module',
    // },
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
