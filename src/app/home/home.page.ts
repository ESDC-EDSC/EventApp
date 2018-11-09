import { ToggleLanguageService } from "./../services/toggle-language.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { EventModel } from "../models";
import { EventService } from "../services/EventService";
import { SearchPipe } from "../pipes/search/search.pipe";
import { SortPipe } from "../pipes/sort/sort.pipe";
import { FeatureFlags } from './../featureFlags';
import { ThemeSettingService } from "../services/theme-setting.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  events: EventModel[];
  searchTerms: string;
  descending = false;
  order: number;
  column: any;
  selectedTheme: string;

  constructor(
    public readonly translate: TranslateService,
    private readonly eventService: EventService,
    public features: FeatureFlags,
    public readonly tl: ToggleLanguageService,
    private readonly themeSetting: ThemeSettingService
  ) {
    this.themeSetting.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
        console.log(this.events);
      },
      error => console.log(error + "Unable To Get Events")
    );
  }

  toggleAppTheme() {
    if (this.selectedTheme === "dark-theme") {
      this.themeSetting.setActiveTheme("light-theme");
    } else {
      this.themeSetting.setActiveTheme("dark-theme");
    }
    console.log(this.selectedTheme);
  }

  sortItems(event) {
    const selection = event.detail.value;
    switch (selection) {
      case "priceLow":
        this.column = "Price";
        this.order = 1;
        break;
      case "priceHigh":
        this.column = "Price";
        this.order = -1;
        break;
      case "dateSoon":
        this.column = "Date";
        this.order = -1;
        break;
      case "dateLate":
        this.column = "Date";
        this.order = 1;
        break;
      case "alphaZ":
        this.column = "TitleEN";
        this.order = -1;
        break;
      case "alphaA":
        this.column = "TitleEN";
        this.order = 1;
        break;

      default:
        break;
    }
  }
}
