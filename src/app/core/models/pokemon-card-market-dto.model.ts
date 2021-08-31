export interface CardMarket {
  url: string
  updatedAt: string
  prices: MarketPrices
}

export interface MarketPrices {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: any
  suggestedPrice: any
  reverseHoloSell: any
  reverseHoloLow: any
  reverseHoloTrend: any
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: any
  reverseHoloAvg7: any
  reverseHoloAvg30: any
}
