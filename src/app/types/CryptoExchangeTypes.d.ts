export type CryptoCurrency = 'BTC' | 'ETH' | 'BNB' | 'ADA' | 'DOT' | 'DOGE' | 'ALGO' | 'UNI' | 'COMP';

export interface ExchangeRate {
  usd: number;
  rate: number;
  logo: string;
  name?: string;
}

export type ExchangeRates = {
  [key in CryptoCurrency]: ExchangeRate;
};
