import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ThemeSettingService {
  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject("light-theme");
  }

  setActiveTheme(val) {
    this.theme.next(val);
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }
}
