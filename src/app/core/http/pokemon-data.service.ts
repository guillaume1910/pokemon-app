import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonCardDTO} from '../models/pokemon-card-dto.model';
import {PokemonQueryParams} from '../models/pokemon-query-params';


@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor(private http: HttpClient) { }


  getCardById(pokemonId: string): Observable<PokemonCardDTO> {
    return this.http.get<PokemonCardDTO>(this.buildUrl("swsh4-25"));
  }

  searchCard(queryParams: PokemonQueryParams) {
    return this.http.get<PokemonCardDTO>('https://api.pokemontcg.io/v2/cards', { params: {...queryParams}});
  }

  private buildUrl(pokemonId: string) {
    return `https://api.pokemontcg.io/v2/cards/${pokemonId}`;
  }
}
