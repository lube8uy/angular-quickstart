import { Component } from '@angular/core';
import { RacingDataService } from './services/racing-data.service';

@Component({
  selector: 'my-app',
  templateUrl: "app/templates/app.component.html",
  styleUrls: [],
  providers: [RacingDataService]
})

export class AppComponent {
	title = "Ultra Racing";
}