import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {URLParts} from "./Shared/Classes/Hardcoded/Hardcoded";
import {MainWrapperModule} from "./Main Wrapper/main-wrapper.module";
import {AuthModule} from "./Auth/auth.module";
import {PageNotFoundComponent} from "./Page Not Found/page-not-found.component";

const routes: Routes = [
  {path: `:${URLParts.User}`, loadChildren: () => MainWrapperModule},
  {path: ``, redirectTo: `${URLParts.User}`, pathMatch: 'full'},
  {path: `${URLParts.Auth}`, loadChildren: () => AuthModule},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
