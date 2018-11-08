import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  isDarkTheme: boolean;

  constructor(private storage: Storage) {
    storage.get('isDarkTheme').then((val) => this.isDarkTheme = val);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storage.set('isdarkTheme', this.isDarkTheme);
  }

  ngOnInit() {
  }

}
