export interface Prices {
  normal: Price
  reverseHolofoil: Price
}


export interface Price {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}
