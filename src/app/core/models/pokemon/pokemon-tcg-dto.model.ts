import {Prices} from './pokemon-prices-dto.model';

export interface TcgPlayer {
  url: string
  updatedAt: string
  prices: Prices
}
