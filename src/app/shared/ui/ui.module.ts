import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderComponent} from './app-header/app-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UiCardComponent } from './ui-card/ui-card.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    UiCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    AppHeaderComponent,
    UiCardComponent
  ]
})
export class UiModule { }
