import {Component, ElementRef} from '@angular/core';
import {AppRoutesService} from "../../Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-Navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

   constructor(public readonly appRoutes: AppRoutesService, private readonly _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
