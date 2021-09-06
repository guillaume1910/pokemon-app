import {TestBed} from '@angular/core/testing';

import {HomeService} from './home.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PokemonDataService} from '../../core/http/pokemon-data.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PokemonDataService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
