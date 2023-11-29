import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "../../../Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-Profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(public readonly appRoutes: AppRoutesService) {

  }

  ngOnInit(): void {
  }
}
