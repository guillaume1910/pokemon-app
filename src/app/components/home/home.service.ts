import {Injectable} from '@angular/core';
import {PokemonDataService} from '../../core/http/pokemon-data.service';
import {PokemonQueryParams} from '../../core/models/pokemon/pokemon-query-params';
import {Observable} from 'rxjs';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';
import {ApiResponse} from '../../core/models/generic/api-response.model';
import {CartStoreService} from '../../shared/services/cart-store.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private pokemonDataService: PokemonDataService, private cart: CartStoreService) { }

  searchPokemon(value: { name: string, rarity: string }): Observable<ApiResponse<PokemonCardDTO[]>> {

    const params = Object.keys(value).filter(key => value[key] && value[key]?.length).map(key => `${key}:${value[key]}`).join(' ')

    const query: PokemonQueryParams = {
      q: params
    }

    return this.pokemonDataService.searchCard(query)
  }

  getRarities(): Observable<string[]> {
    return this.pokemonDataService.getRarities().pipe(map(data => data.data))
  }

  addPokemonToCart(pokemon: PokemonCardDTO) {
    this.cart.articleAdded(pokemon)
  }

  removePokemonToCart(pokemon: PokemonCardDTO) {
    this.cart.articleRemoved(pokemon)
  }
}
