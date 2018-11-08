import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { SortPipe } from '../pipes/sort/sort.pipe';
import { SearchPipe } from '../pipes/search/search.pipe';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, EventComponent, ThemeToggleComponent, SortPipe, SearchPipe]
})
export class HomePageModule {}
