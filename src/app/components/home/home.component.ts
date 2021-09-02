import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeService} from './home.service';
import {debounceTime, filter, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';
import {ApiResponse} from '../../core/models/generic/api-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({ search: new FormControl('')})
  pokemonCard$: Observable<ApiResponse<PokemonCardDTO[]>>

  constructor(private facade: HomeService) { }

  ngOnInit(): void {
    this.pokemonCard$ = this.formGroup.valueChanges.pipe(
      debounceTime(500),
      filter(value => !!value && value?.search?.length),
      switchMap(value => this.facade.searchPokemon(value.search)))
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
