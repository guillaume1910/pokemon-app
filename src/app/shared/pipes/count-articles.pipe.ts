import { Pipe, PipeTransform } from '@angular/core';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';
import {CartStoreService} from '../services/cart-store.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Pipe({
  name: 'countArticles'
})
export class CountArticlesPipe implements PipeTransform {
  constructor(private cartStore: CartStoreService) {
  }

  transform(value: PokemonCardDTO): Observable<number> {
    return this.cartStore.selectCart().pipe(map(currentCart => {
      const pokemonExistInCart = currentCart.find(({pokemon}) => pokemon.id === value.id)
      if (pokemonExistInCart) {
        return pokemonExistInCart.count
      }
      return 0
    }))
  }

}
