'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CryptoCurrency, ExchangeRates } from '../types/CryptoExchangeTypes';

interface CryptoDropdownProps {
  selectedCrypto: CryptoCurrency;
  onChange: (crypto: CryptoCurrency, isFrom: boolean) => void;
  exchangeRates: ExchangeRates;
  isFrom: boolean;
}

const CryptoDropdown: React.FC<CryptoDropdownProps> = ({ selectedCrypto, onChange, exchangeRates, isFrom }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (crypto: CryptoCurrency) => {
    onChange(crypto, isFrom);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="    bg-black text-exchangeDropdown py-3 px-4 rounded-sm cursor-pointer hover:bg-opacity-80    font-medium text-sm  text-center inline-flex items-center "
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="max-h-6 self-center flex">
          <Image
            src={exchangeRates[selectedCrypto]?.logo}
            className="self-center"
            alt={selectedCrypto}
            width={selectedCrypto === 'ETH' ? 20 : 32}
            height={32}
          />
        </div>
        <span className="mx-2">{selectedCrypto}</span>
        <svg
          className="w-2.5 h-2.5 ml-1 -rotate-90"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <div id="dropdown" className="z-10 absolute text-white bg-gray-900 divide-y divide-gray-100 shadow w-44 ">
          <ul className="py-2 text-sm text-zink-50" aria-labelledby="dropdownDefaultButton">
            {Object.keys(exchangeRates).map((crypto) => (
              <li key={crypto}>
                <button
                  type="button"
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleSelect(crypto as CryptoCurrency)}>
                  <Image src={exchangeRates[crypto as CryptoCurrency]?.logo} alt={crypto} width={20} height={20} />
                  <span className="mx-2">{crypto}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CryptoDropdown;
