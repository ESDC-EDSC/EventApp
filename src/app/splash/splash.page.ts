import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(
    private readonly translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit() {}

  pickLang(event) {
    if (event.target.id === 'language-button-english') {
      this.translate.use('en');
    } else {
      this.translate.use('fr');
    }
    this.router.navigateByUrl('home');
  }
}
