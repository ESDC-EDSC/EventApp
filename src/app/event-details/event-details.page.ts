import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventModel } from "../models";
import { FeatureFlags } from "../app.module";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.page.html",
  styleUrls: ["./event-details.page.scss"]
})
export class EventDetailsPage implements OnInit {
  event: EventModel;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly features: FeatureFlags,
    public readonly translate: TranslateService
  ) {

    this.route.queryParams.subscribe(params => {

      this.event = JSON.parse(params["message"]);
      console.log(this.event.TitleEN);

    });

  }

  ngOnInit() {}
}
