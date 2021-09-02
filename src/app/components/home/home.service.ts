import {Injectable} from '@angular/core';
import {PokemonDataService} from '../../core/http/pokemon-data.service';
import {PokemonQueryParams} from '../../core/models/pokemon/pokemon-query-params';
import {Observable} from 'rxjs';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';
import {ApiResponse} from '../../core/models/generic/api-response.model';
import {CartStoreService} from '../../shared/services/cart-store.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private pokemonDataService: PokemonDataService, private cart: CartStoreService) { }

  searchPokemon(value: string): Observable<ApiResponse<PokemonCardDTO[]>> {
    const query: PokemonQueryParams = {
      q: `name:${value.toString()}`
    }

    return this.pokemonDataService.searchCard(query)
  }

  addPokemonToCart(pokemon: PokemonCardDTO) {
    this.cart.articleAdded(pokemon)
  }

  removePokemonToCart(pokemon: PokemonCardDTO) {
    this.cart.articleRemoved(pokemon)
  }
}
