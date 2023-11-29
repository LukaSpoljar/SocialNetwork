import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainWrapperComponent} from "./main-wrapper.component";
import {DashboardsModule} from "./Dashboards/dashboards.module";

const routes: Routes = [
    {path: '',loadChildren:() => DashboardsModule, component: MainWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainWrapperRoutingModule { }
