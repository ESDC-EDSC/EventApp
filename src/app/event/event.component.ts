import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../models';

@Component({
  selector: 'eventloader',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input()
  event: EventModel;

  constructor() {
    console.log('in constructor');
   }

   ngOnInit() {
    console.log('in onInit');
   }
}
