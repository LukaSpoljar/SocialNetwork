import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "./Shared/Services/App Routes/app-routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SocialNetwork';

  constructor(public readonly appRoutes: AppRoutesService) {
  }

  ngOnInit(): void {
    window.addEventListener("resize", (event: any): void => {
      CalculateHTMLElementDimensions();

      function CalculateHTMLElementDimensions(): void {
        let htmlElement: HTMLHtmlElement = document.getElementsByTagName("html")[0];
        setWebPageHeight();

        function setWebPageHeight(): void {
          htmlElement.style.height = window.innerHeight + "px";
        }
      }
    });
  }
}
