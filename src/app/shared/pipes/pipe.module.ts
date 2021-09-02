import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountArticlesPipe} from './count-articles.pipe';



@NgModule({
  declarations: [CountArticlesPipe],
  imports: [
    CommonModule
  ],
  exports: [CountArticlesPipe]
})
export class PipeModule { }
