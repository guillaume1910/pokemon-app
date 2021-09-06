import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonCardDTO} from '../models/pokemon/pokemon-card-dto.model';
import {PokemonQueryParams} from '../models/pokemon/pokemon-query-params';
import {ApiResponse} from '../models/generic/api-response.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor(private http: HttpClient) { }


  getRarities(): Observable<ApiResponse<string[]>> {
    return this.http.get<ApiResponse<string[]>>('  https://api.pokemontcg.io/v2/rarities');
  }

  getCardById(pokemonId: string): Observable<PokemonCardDTO> {
    return this.http.get<PokemonCardDTO>(this.buildUrl(pokemonId));
  }

  searchCard(queryParams: PokemonQueryParams): Observable<ApiResponse<PokemonCardDTO[]>> {
    return this.http.get<ApiResponse<PokemonCardDTO[]>>('https://api.pokemontcg.io/v2/cards', { params: {...queryParams}});
  }

  private buildUrl(pokemonId: string) {
    return `https://api.pokemontcg.io/v2/cards/${pokemonId}`;
  }
}
