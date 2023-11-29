import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsRoutingModule} from './dashboards-routing.module';
import {HomeComponent} from "./Home/home.component";
import {ProfileComponent} from "./Profile/profile.component";
import {AdminComponent} from './Admin/admin.component';


@NgModule({
  declarations: [HomeComponent, ProfileComponent, AdminComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule {
}
