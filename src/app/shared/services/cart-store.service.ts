import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Article} from '../../core/models/pokemon/article.model';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';


@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  private cart = new BehaviorSubject<Article[]>([])

  constructor() { }


  selectCart(): Observable<Article[]> {
    return this.cart.asObservable()
  }

  selectCartSize(): Observable<number> {
    return this.selectCart().pipe(map(cart => cart.reduce((a, b) => a + b.count, 0)))
  }

  cartChanged(article: Article) {
    const currentValue: Article[] = this.cart.value
    currentValue.push(article);
    this.cart.next(currentValue)
  }


  articleAdded(item: PokemonCardDTO) {
    const currentCart: Article[] = this.cart.value
    const pokemonExistInCart = currentCart.find(({pokemon}) => pokemon.id === item.id)

    if (!pokemonExistInCart) {
      this.cartChanged( { pokemon: item, count: 1})
    } else {
      pokemonExistInCart.count += 1
      this.cart.next([...currentCart])
    }
  }

  articleRemoved(item: PokemonCardDTO) {
    const currentCart: Article[] = this.cart.value
    const pokemonExistInCart = currentCart.find(({pokemon}) => pokemon.id === item.id)

    if (pokemonExistInCart) {
      pokemonExistInCart.count -= 1
      this.cart.next([...currentCart])
    }
  }

}
