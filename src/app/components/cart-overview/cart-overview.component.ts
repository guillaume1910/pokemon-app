import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../../core/models/pokemon/article.model';
import {CartStoreService} from '../../shared/services/cart-store.service';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit {

  cart$: Observable<Article[]> = this.cartStore.selectCart()
  totalPrice$: Observable<number> = this.cartStore.getTotalPrice()

  constructor( private cartStore: CartStoreService) { }

  ngOnInit(): void {
  }

}
