import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";
import { FeatureFlags } from "../app.module";

@Injectable()
export class ToggleLanguageService {
  constructor(
    private translate: TranslateService,
    public readonly features: FeatureFlags
  ) {}

  toggleLanguage() {
    const current = this.translate.currentLang;
    if (this.features.bilingualBug) {
      if (current === "en") {
        this.translate.use("fr");
      } else {
        this.translate.use("en");
      }
    }
  }
}
