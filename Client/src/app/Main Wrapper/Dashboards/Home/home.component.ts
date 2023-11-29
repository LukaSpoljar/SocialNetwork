import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "../../../Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(public readonly appRoutes: AppRoutesService) {
   //appRoutes.verifyUser();
  }

  ngOnInit(): void {
  }
}
