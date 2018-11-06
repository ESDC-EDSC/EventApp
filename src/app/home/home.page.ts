import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventModel } from '../models';
import { EventService } from '../services/EventService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: EventModel[];
  //   {
  //     TitleEN: 'TitleEN',
  //     DescriptionEN: 'DescriptionEN',
  //     TitleFR: 'TitleFR',
  //     DescriptionFR: 'DescriptionFR',
  //     Location: 'Location',
  //     ImageURL: 'ImageURL',
  //     MapURL: 'MapURL',
  //     MusicURL: 'MusicURL'
  //   },
  //   {
  //     TitleEN: 'TitleEN',
  //     DescriptionEN: 'DescriptionEN',
  //     TitleFR: 'TitleFR',
  //     DescriptionFR: 'DescriptionFR',
  //     Location: 'Location',
  //     ImageURL: 'ImageURL',
  //     MapURL: 'MapURL',
  //     MusicURL: 'MusicURL'
  //   }
  // ];

  constructor(public readonly translate: TranslateService,
    private readonly eventService: EventService) {
    this.eventService.getEvents()
      .subscribe(data => { console.log(data); return this.events = data; },
        error => console.log(error + 'Wow you suck'));

  }
}
