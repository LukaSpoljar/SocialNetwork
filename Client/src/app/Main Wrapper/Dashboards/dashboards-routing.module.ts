import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Home/home.component";
import {URLParts} from "../../Shared/Classes/Hardcoded/Hardcoded";
import {ProfileComponent} from "./Profile/profile.component";
import {AdminComponent} from "./Admin/admin.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: `${URLParts.Home}`, redirectTo: '', pathMatch: 'full'},
  {path: `${URLParts.Profile}`, component: ProfileComponent},
  {path: `${URLParts.Admin}`, component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
