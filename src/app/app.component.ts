import {Component, OnInit} from '@angular/core';
import {CartStoreService} from './shared/services/cart-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  cartSize$: Observable<number> = this.cart.selectCartSize()

  constructor(private cart: CartStoreService) {
  }

  ngOnInit(): void {
  }


}
