import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'eventloader',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input()
  event: EventModel;

  constructor(private readonly router: Router) {
   }

   onClick(route: string) {
    this.router.navigate([route], {queryParams: {"message": JSON.stringify(this.event)}});
  }

   ngOnInit() {
   }
}
