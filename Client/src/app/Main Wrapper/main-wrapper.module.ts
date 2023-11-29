import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainWrapperRoutingModule} from './main-wrapper-routing.module';
import {NavigationComponent} from './Navigation/navigation.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MainWrapperComponent} from "./main-wrapper.component";


@NgModule({
  declarations: [
    MainWrapperComponent,
    NavigationComponent
  ],
  exports: [
    MainWrapperComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MainWrapperRoutingModule,
    MatButtonToggleModule
  ]
})
export class MainWrapperModule {
}
