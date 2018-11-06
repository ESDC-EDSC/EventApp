import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventModel } from '../models';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: EventModel[] = [
    {
      TitleEN: 'TitleEN',
      DescriptionEN: 'DescriptionEN',
      TitleFR: 'TitleFR',
      DescriptionFR: 'DescriptionFR',
      Location: 'Location',
      ImageURL: 'ImageURL',
      MapURL: 'MapURL',
      MusicURL: 'MusicURL'
    },
    {
      TitleEN: 'TitleEN',
      DescriptionEN: 'DescriptionEN',
      TitleFR: 'TitleFR',
      DescriptionFR: 'DescriptionFR',
      Location: 'Location',
      ImageURL: 'ImageURL',
      MapURL: 'MapURL',
      MusicURL: 'MusicURL'
    }
  ];

  constructor(public readonly translate: TranslateService) {

  }
}
