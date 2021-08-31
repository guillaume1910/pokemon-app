import {Component, OnInit} from '@angular/core';
import {PokemonDataService} from './core/http/pokemon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';


  constructor(private facade: PokemonDataService) {
  }

  ngOnInit(): void {
    this.facade.getCardById('d').subscribe(r => console.log(r))

    this.facade.searchCard({ q: 'name:charizard'}).subscribe(r => console.log(r))
  }


}
