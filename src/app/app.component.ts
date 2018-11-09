import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeSettingService } from './services/theme-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  selectedTheme: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private themeSetting: ThemeSettingService
  ) {
    this.initializeApp();
    this.themeSetting.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initTranslate();
    });
  }

  public initTranslate() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
