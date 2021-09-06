import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeService} from './home.service';
import {catchError, debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';
import {ApiResponse} from '../../core/models/generic/api-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({ name: new FormControl(''), rarity: new FormControl('')})
  pokemonCard$: Observable<ApiResponse<PokemonCardDTO[]>>
  rarities$: Observable<string[]> = this.facade.getRarities()
  isLoading = false

  constructor(private facade: HomeService) { }

  ngOnInit(): void {
    this.pokemonCard$ = this.formGroup.valueChanges.pipe(
      debounceTime(500),
      tap(() => this.isLoading = true),
      switchMap(value => this.facade.searchPokemon(value).pipe(
        catchError(() => of({data: []} as ApiResponse<PokemonCardDTO[]>)),
        finalize(() => this.isLoading = false))),
      )
  }

  trackByFn(index, item) {
    return index;
  }

  addPokemon(pokemon: PokemonCardDTO) {
   this.facade.addPokemonToCart(pokemon)
  }

  removePokemon(pokemon: PokemonCardDTO) {
    this.facade.removePokemonToCart(pokemon)
  }


}
