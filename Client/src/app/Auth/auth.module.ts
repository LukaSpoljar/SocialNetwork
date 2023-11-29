import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {MatCardModule} from "@angular/material/card";
import {ComponentsModule} from "../Shared/Components/components.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
   CommonModule,
        AuthRoutingModule,
        MatCardModule,
        ComponentsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule
  ]
})
export class AuthModule { }
