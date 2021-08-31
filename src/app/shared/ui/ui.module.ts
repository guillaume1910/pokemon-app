import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderComponent} from './app-header/app-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class UiModule { }
