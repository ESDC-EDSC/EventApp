import { FeatureFlags } from "./../featureFlags";
import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToggleLanguageService {
  constructor(
    private translate: TranslateService,
    public readonly features: FeatureFlags
  ) {}

  toggleLanguage() {
    const current = this.translate.currentLang;
    if (this.features.bilingualBug === false) {
      if (current === "en") {
        this.translate.use("fr");
      } else {
        this.translate.use("en");
      }
    } else {
      if (current === "fr") {
        this.translate.use("fr");
      } else {
        this.translate.use("fr");
      }
    }
  }
}
