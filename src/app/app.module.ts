import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CovalentCoreModule } from '@covalent/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ReemoHealthService } from './reemo-health.service';

import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OverviewComponent } from './overview/overview.component';
import { HighlightComponent } from './highlight/highlight.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ChartComponent,
    OverviewComponent,
    HighlightComponent,
    DetailsComponent,
    WelcomeComponent,
    NotFoundComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    HttpModule,
    CovalentCoreModule.forRoot(),
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    Title,
    ReemoHealthService,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
