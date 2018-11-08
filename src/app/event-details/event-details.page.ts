import { CurrencyPipe } from '@angular/common';
import { ToggleLanguageService } from './../services/toggle-language.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventModel } from "../models";
import { FeatureFlags } from "../app.module";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.page.html",
  styleUrls: ["./event-details.page.scss"]
})
export class EventDetailsPage implements OnInit {
  event: EventModel;

  title: string;
  description: string;
  date: string;
  location: string;
  price: string;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly features: FeatureFlags,
    public readonly translate: TranslateService,
    public readonly tl: ToggleLanguageService
  ) {

    this.route.queryParams.subscribe(params => {

      this.event = JSON.parse(params["message"]);
      console.log(this.event.TitleEN);

    });

  }

  setText(langCode: string) {

    if (langCode === "en") {
      this.title = this.event.TitleEN;
      this.description = this.event.DescriptionEN;
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
      this.description = this.event.DescriptionFR;
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

  ngOnInit() {

    this.setText(this.translate.currentLang);

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setText(event.lang);
    });

  }
}
