import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { EventModel } from "../models";
import { EventService } from "../services/EventService";
import { SearchPipe } from "../pipes/search/search.pipe";
import { SortPipe } from "../pipes/sort/sort.pipe";

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
  column = 'name';

  constructor(
    public readonly translate: TranslateService,
    private readonly eventService: EventService,
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
        console.log(this.events);
      },
      error => console.log(error + "Wow you suck")
    );
  }

  sortItems(event) {
    // const selection = event.detail.value;
    // switch (selection) {
    //   case "priceLow":

    //     break;
    //   case "priceHigh":

    //     break;
    //   case "dateSoon":

    //     break;
    //   case "dateLate":

    //     break;
    //   case "alphaZ":

    //     break;
    //   case "alphaA":

    //     break;

    //   default:
    //     break;
    // }
  }
}
