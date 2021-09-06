import { Injectable } from '@angular/core';
import {CartStoreService} from './shared/services/cart-store.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cartSize$ = this.cart.selectCartSize()

  constructor(private cart: CartStoreService) { }
}
