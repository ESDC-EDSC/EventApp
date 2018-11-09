import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ThemeSettingService {
  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject("dark-theme");
  }

  setActiveTheme(val) {
    this.theme.next(val);
    console.log('theme toggled');
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }
}
