import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from '../models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: EventModel;

  constructor(private readonly route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.event = JSON.parse(params['message']);
      console.log(this.event.TitleEN);
       });
  }

  ngOnInit() {
  }

}
