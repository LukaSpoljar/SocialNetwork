import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "../Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-PageNotFound',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(public readonly appRoutes: AppRoutesService) {
  }

  ngOnInit(): void {
  }
}
