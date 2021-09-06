import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  cartSize$: Observable<number> = this.facade.cartSize$

  constructor(private facade: AppService) {
  }

  ngOnInit(): void {
  }


}
