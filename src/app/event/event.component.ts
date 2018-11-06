import { Component, Input } from '@angular/core';
import { EventModel } from '../models';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input()
  event: EventModel;

  constructor() {
    console.log('Hello');
   }
}
