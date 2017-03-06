import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      component: DashboardComponent,
      path: '',
      children: [
        {
          path: '',
          component: WelcomeComponent,
        },
        {
          path: 'details/:type',
          component: DetailsComponent,
        },
      ],
    },
  ]},
  {
    path: '**',
    component: NotFoundComponent,
  },

];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
