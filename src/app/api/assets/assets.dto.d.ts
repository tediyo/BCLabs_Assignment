/**
  Interface representing a crypto asset.
 */
export interface CryptoAssetDTO {
  name: string;
  hex: string;
  logo: string;
  fiat: string;
  lastTrade: number;
  change24h: number;
  change24hValue: number;
}

/**
  Interface representing the response structure for the assets API.
 */
export interface AssetsResponseDTO {
  assets: CryptoAssetDTO[];
}
