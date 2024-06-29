'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { formatPrice, getTextColorClass } from '../utils/tableUils';
import { AssetsResponseDTO, CryptoAssetDTO } from '../api/assets/assets.dto';
import TableLoader from './loaders/TableLoader';

const CryptoTable = () => {
  const [assets, setAssets] = useState<CryptoAssetDTO[] | null>(null);

  useEffect(() => {
    fetch('/api/assets')
      .then((response) => response.json())
      .then((data) => setAssets(data));
  }, []);

  return (
    <div className="w-100">
      <div className="flex flex-col justify-center items-center self-center">
        <div className="bg-black bg-opacity-80 rounded-lg p-4 px-6 lg:px-10 w-full self-center backdrop-blur border border-borders max-w-8xl">
          <table className="w-full text-white px-5 table-fixed gap-10">
            <thead className="border-b border-b-borders">
              <tr className="text-zinc-50 uppercase tracking-wider text-xl">
                <th className="text-left font-medium py-4">Assets</th>
                <th className="text-left font-medium py-4">Last Trade</th>
                <th className="text-left font-medium py-4">24H %</th>
                <th className="text-left font-medium py-4">24H Change</th>
                <th className="text-right font-medium py-4 text-actionButton">More &gt;</th>
              </tr>
            </thead>
            <tbody className="text-lg text-zinc-50">
              {assets
                ? assets.map((crypto) => (
                  <tr key={crypto.name}>
                    <td className="py-4 flex items-center">
                      <div
                        className={`w-16 h-16 rounded-lg mr-4 flex items-center justify-center border-borders border`}
                        style={{ backgroundColor: crypto.hex }}>
                        <Image
                          src={crypto?.logo}
                          alt={crypto.name}
                          width={crypto.name === 'UNI' ? 50 : 30}
                          height={30}
                          className="mr-2 self-center"
                        />
                      </div>
                      <span>{crypto.name}/</span>
                      <span className="text-priceText uppercase">{crypto.fiat}</span>
                    </td>
                    <td className="text-left py-4">{formatPrice(crypto.lastTrade.toFixed(2))}</td>
                    <td className={`text-left py-4 ${getTextColorClass(crypto.change24h)}`}>
                      {crypto.change24h >= 0 && '+'}
                      {crypto.change24h.toFixed(2)}%
                    </td>
                    <td className={`text-left py-4 ${getTextColorClass(crypto.change24hValue)}`}>
                      {formatPrice(crypto.change24hValue.toFixed(2))}
                    </td>
                    <td className="py-4 text-right lg:pl-10">
                      <button className="bg-secondary text-accent font-medium text-opacity-80 border border-borders px-3 py-2 hover:bg-green-600 transition-colors">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))
                : Array.from({ length: 5 }).map((_, index) => <TableLoader key={index} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
