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
    console.log('in constructor');
   }

   onClick(route: string) {
    this.router.navigate([route], {queryParams: {"message": JSON.stringify(this.event)}});
  }

   ngOnInit() {
    console.log('in onInit');
    console.log(JSON.stringify(this.event));
   }
}
