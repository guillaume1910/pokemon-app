import {async, TestBed} from '@angular/core/testing';
import {CartStoreService} from './cart-store.service';
import {PokemonCardDTO} from '../../core/models/pokemon/pokemon-card-dto.model';


describe('CartPokemonStoreService', () => {
  let service: CartStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add Article', async(() => {
    let store: CartStoreService;
    store = TestBed.get(CartStoreService);
    const testCart: PokemonCardDTO = {
      id: '1234',
      name: 'test'
    };
    store.articleAdded(testCart);
    store.selectCart().subscribe(cart => {
      expect(cart).toEqual([{count: 1, pokemon: testCart}]);
    });
  }));

  it('should remove Article', async(() => {
    let store: CartStoreService;
    store = TestBed.get(CartStoreService);
    const testCart: PokemonCardDTO = {
      id: '1234',
      name: 'test'
    };
    store.articleAdded(testCart);
    store.articleRemoved(testCart);
    store.selectCart().subscribe(cart => {
      expect(cart).toEqual([]);
    });
  }));
});
