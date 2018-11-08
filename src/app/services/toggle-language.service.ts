import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleLanguageService {

  constructor(private translate: TranslateService) { }

  toggleLanguage() {

     const current = this.translate.currentLang;

    if (current === "en") {
      this.translate.use("fr");
    } else {
      this.translate.use("en");
    }

  }
}
