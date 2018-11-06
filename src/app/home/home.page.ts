import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { EventModel } from "../models";
import { EventService } from "../services/EventService";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  events: EventModel[];

  constructor(
    public readonly translate: TranslateService,
    private readonly eventService: EventService
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
}
