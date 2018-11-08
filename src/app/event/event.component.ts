import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../models';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SkeletonText } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'eventloader',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input()
  event: EventModel;

  title: string;
  date: string;
  location: string;
  price: string;
  isDarkTheme: boolean;

  constructor(
    private readonly router: Router,
    private storage: Storage,
    public readonly translate: TranslateService
  ) {
    storage.get('isDarkTheme').then((val) => this.isDarkTheme = val);
  }

  private setText(langCode: string) {
    if (langCode === 'en') {
      this.title = this.event.TitleEN;
      this.date = this.event.Date;
      this.location = this.event.Location;
      this.price = new CurrencyPipe('en').transform(
        this.event.Price,
        'CAD',
        'symbol-narrow',
        '1.2'
      );
    } else {
      this.title = this.event.TitleFR;
      this.date = this.event.Date;
      this.location = this.event.Location;
      this.price = new CurrencyPipe('fr').transform(
        this.event.Price,
        'CAD',
        'symbol-narrow',
        '1.2'
      );
    }
  }

  onClick(route: string) {
    this.router.navigate([route], {
      queryParams: { message: JSON.stringify(this.event) },
    });
  }

  ngOnInit() {
    this.setText(this.translate.currentLang);

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("changing lang in event component " + event.lang);
      this.setText(event.lang);
    });
  }
}
