import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "../Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  constructor(public readonly appRoutes: AppRoutesService) {
  }

  ngOnInit(): void {
  }
}
