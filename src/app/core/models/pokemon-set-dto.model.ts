import {Legalities} from './pokemon-legalities-dto.model';
import {Images} from './pokemon-image-dto.model';

export interface PokemonSetDTO {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: Images
}
