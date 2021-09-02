import {Ability} from './pokemon-ability-dto.model';
import {Attack} from './pokemon-attack-dto.model';
import {Weakness} from './pokemon-weakness-dto.model';
import {PokemonSetDTO} from './pokemon-set-dto.model';
import {Legalities} from './pokemon-legalities-dto.model';
import {Images} from './pokemon-image-dto.model';
import {TcgPlayer} from './pokemon-tcg-dto.model';
import {CardMarket} from './pokemon-card-market-dto.model';

export interface PokemonCardDTO {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: string[]
  evolvesFrom: string
  abilities: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: PokemonSetDTO
  number: string
  artist: string
  rarity: string
  flavorText: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: Images
  tcgplayer: TcgPlayer
  cardmarket: CardMarket
}
