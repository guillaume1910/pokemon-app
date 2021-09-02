import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeService} from './home.service';
import {UiModule} from '../../shared/ui/ui.module';
import {PipeModule} from '../../shared/pipes/pipe.module';


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        UiModule,
        PipeModule
    ],
  providers: [HomeService]
})
export class HomeModule {
}
