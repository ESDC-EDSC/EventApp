import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: Event[];

  // declare some sort of event service
  constructor() {
    // get the events here...
  }

  constructor(public readonly translate: TranslateService) {

  }
}
