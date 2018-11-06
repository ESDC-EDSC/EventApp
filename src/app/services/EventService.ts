import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { EventModel } from "../models";

@Injectable()
export class EventService {
    constructor(private http: Http) {
    }

    getEvents(): Observable<EventModel[]> {
        return this.http.get('../../assets/dummyData.json').map((res: any) => res.json())
            .catch((error: any) => {console.log('Something broke...'); return Observable.throw(error); });
    }
}
