'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import CryptoDropdown from './CryptoDropdown';
import { CryptoCurrency, ExchangeRate, ExchangeRates } from '../types/CryptoExchangeTypes';
import SwapLoader from './loaders/SwapLoader';

const CryptoExchange: React.FC = () => {
  const [fromCrypto, setFromCrypto] = useState<CryptoCurrency>('BTC');
  const [toCrypto, setToCrypto] = useState<CryptoCurrency>('BNB');
  const [fromAmount, setFromAmount] = useState<string>('0.00');
  const [toAmount, setToAmount] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<string>('');
  const [swapAssets, setSwapAssets] = useState<ExchangeRates | null>(null);


  useEffect(() => {
    fetch('/api/swap')
      .then((response) => response.json())
      .then((data) => {
        const exchangeRates: ExchangeRates = data.reduce((acc: ExchangeRates, curr: ExchangeRate) => {
          acc[curr.name as keyof ExchangeRates] = {
            usd: curr.usd,
            rate: curr.rate,
            logo: curr.logo
          };
          return acc;
        }, {} as ExchangeRates);

        setSwapAssets(exchangeRates);
      });
  }, []);
  useEffect(() => {
    if (swapAssets) {
      calculateExchange(fromAmount, fromCrypto, toCrypto);
    }
  }, [fromCrypto, toCrypto, fromAmount, swapAssets]);

  const calculateExchange = (amount: string, from: CryptoCurrency, to: CryptoCurrency): void => {
    if (!swapAssets || amount === '') return;

    const fromRate = swapAssets[from]?.rate;
    const toRate = swapAssets[to]?.rate;
    const rate = toRate / fromRate;
    const calculatedAmount = parseFloat(amount) * rate;

    setToAmount(calculatedAmount.toFixed(8));
    setExchangeRate(rate.toFixed(8));
  };

  const handleFromAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const amount = e.target.value;
    setFromAmount(amount);
    //validaing and handleing empty fields and non number input to avoid NaN input
    if (amount === '' || isNaN(parseFloat(amount))) {
      setToAmount('');
      setExchangeRate('');
    }
  };

  const handleCryptoChange = (crypto: CryptoCurrency, isFrom: boolean): void => {
    if (isFrom) {
      setFromCrypto(crypto);
    } else {
      setToCrypto(crypto);
    }
  };

  const handleSwap = (): void => {
    setFromCrypto(toCrypto);
    setToCrypto(fromCrypto);
    setFromAmount(toAmount);
  };

  if (!swapAssets) {
    return <SwapLoader />;
  }

  return (
    <div className="w-100 py-16">
      <div className="flex flex-col justify-center items-center self-center max-w-8xl">
        <div className="bg-black bg-opacity-80 rounded-lg p-8  px-6 lg:px-10 w-full self-center backdrop-blur border border-borders">
          <div className="flex justify-between">
            <h2 className="text-white text-xl font-semibold mb-8">SWAP TOKENS</h2>
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9996 1.97998C15.1223 1.97998 14.3596 2.54131 12.8356 3.66531L10.5409 5.35731C10.3009 5.53465 10.1809 5.62265 10.0516 5.69731C9.92228 5.77198 9.78495 5.83065 9.51161 5.95065L6.89961 7.09198C5.16361 7.85198 4.29561 8.23065 3.85694 8.98931C3.41961 9.74931 3.52361 10.6906 3.73561 12.5733L4.05294 15.4066C4.08628 15.7026 4.10228 15.8506 4.10228 16C4.10228 16.1493 4.08628 16.2973 4.05294 16.5933L3.73561 19.4266C3.52494 21.3093 3.41961 22.2506 3.85694 23.0106C4.29694 23.7706 5.16361 24.1493 6.89961 24.908L9.51295 26.0493C9.78495 26.1693 9.92228 26.228 10.0516 26.3026C10.1796 26.3773 10.3009 26.4653 10.5409 26.6426L12.8343 28.3346C14.3609 29.4586 15.1236 30.02 15.9996 30.02C16.8756 30.02 17.6396 29.4586 19.1636 28.3346L21.4583 26.6426C21.6983 26.4653 21.8183 26.3773 21.9476 26.3026C22.0769 26.228 22.2143 26.1693 22.4876 26.0493L25.0996 24.908C26.8356 24.148 27.7036 23.7693 28.1423 23.0106C28.5796 22.2506 28.4756 21.3093 28.2623 19.4266L27.9463 16.5933C27.9129 16.2973 27.8956 16.1493 27.8956 16C27.8956 15.8506 27.9129 15.7026 27.9463 15.4066L28.2636 12.5733C28.4743 10.6906 28.5796 9.74931 28.1423 8.98931C27.7023 8.22931 26.8356 7.85065 25.0996 7.09198L22.4863 5.95065C22.3023 5.87598 22.1225 5.79141 21.9476 5.69731C21.7785 5.59289 21.6151 5.47939 21.4583 5.35731L19.1649 3.66531C17.6369 2.54131 16.8743 1.97998 15.9996 1.97998ZM15.9996 21.3333C17.4141 21.3333 18.7707 20.7714 19.7708 19.7712C20.771 18.771 21.3329 17.4145 21.3329 16C21.3329 14.5855 20.771 13.2289 19.7708 12.2287C18.7707 11.2285 17.4141 10.6666 15.9996 10.6666C14.5851 10.6666 13.2286 11.2285 12.2284 12.2287C11.2282 13.2289 10.6663 14.5855 10.6663 16C10.6663 17.4145 11.2282 18.771 12.2284 19.7712C13.2286 20.7714 14.5851 21.3333 15.9996 21.3333Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center self-center">
            <div className="bg-exchangeBg rounded-l-lg p-4 px-8 mb-4 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={handleFromAmountChange}
                    className="bg-transparent text-zinc-50 text-5xl font-semibold outline-none w-3/4"
                  />
                  <div className="text-sm mt-1 text-exchangeRate">
                    $
                    {fromAmount && !isNaN(parseFloat(fromAmount))
                      ? (parseFloat('0.00') * swapAssets[fromCrypto]?.usd).toFixed(2)
                      : '0.00'}
                  </div>
                </div>
                <div className="">
                  <CryptoDropdown
                    selectedCrypto={fromCrypto}
                    onChange={handleCryptoChange}
                    exchangeRates={swapAssets}
                    isFrom={true}
                  />
                  <div className="min-w-32">
                    <div className="mt-1 text-sm text-zinc-50">
                      Balance: <span className="text-exchangeBalance"> 24,240 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center  -mt-3 -mx-6 shadow-sm relative z-10">
              <button className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors" onClick={handleSwap}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.0257 9.99984C9.8895 8.23413 10.2975 6.46908 11.1948 4.94228C12.0921 3.41548 13.4356 2.20021 15.0445 1.46006C16.6534 0.7199 18.4504 0.490382 20.1936 0.802396C21.9369 1.11441 23.5427 1.95298 24.7949 3.20523C26.0472 4.45749 26.8858 6.06331 27.1978 7.80656C27.5098 9.54981 27.2803 11.3468 26.5401 12.9557C25.7999 14.5645 24.5847 15.908 23.0579 16.8053C21.5311 17.7026 19.766 18.1107 18.0003 17.9745"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.3337 20.6665C27.3337 21.7274 26.9122 22.7448 26.1621 23.4949C25.4119 24.2451 24.3945 24.6665 23.3337 24.6665H20.667M20.667 24.6665L23.3337 21.9998M20.667 24.6665L23.3337 27.3332M0.666992 7.33317C0.666992 6.2723 1.08842 5.25489 1.83857 4.50474C2.58871 3.7546 3.60613 3.33317 4.66699 3.33317H7.33366M7.33366 3.33317L4.66699 5.99984M7.33366 3.33317L4.66699 0.666504M9.33366 27.3332C7.03512 27.3332 4.83072 26.4201 3.2054 24.7948C1.58008 23.1694 0.666992 20.965 0.666992 18.6665C0.666992 16.368 1.58008 14.1636 3.2054 12.5382C4.83072 10.9129 7.03512 9.99984 9.33366 9.99984C11.6322 9.99984 13.8366 10.9129 15.4619 12.5382C17.0872 14.1636 18.0003 16.368 18.0003 18.6665C18.0003 20.965 17.0872 23.1694 15.4619 24.7948C13.8366 26.4201 11.6322 27.3332 9.33366 27.3332Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-exchangeBg rounded-r-lg p-4 px-8 mb-4 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="text"
                    value={'0.00'}
                    readOnly
                    className="bg-transparent text-zinc-50 text-5xl font-semibold outline-none w-3/4"
                  />
                  <div className="text-sm mt-1 text-exchangeRate">
                    $
                    {toAmount && !isNaN(parseFloat('0.00'))
                      ? (parseFloat('0.00') * swapAssets[toCrypto]?.usd).toFixed(2)
                      : '0.00'}
                  </div>
                </div>
                <div className="flex flex-col">
                  <CryptoDropdown
                    selectedCrypto={toCrypto}
                    onChange={handleCryptoChange}
                    exchangeRates={swapAssets}
                    isFrom={false}
                  />
                  <div className="min-w-32">
                    <div className="mt-1 text-sm text-zinc-50">
                      Balance: <span className="text-exchangeBalance"> 63,790 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-primary text-white py-3 px-16 rounded-tl-xl rounded-br-xl hover:bg-purple-700 transition-colors">
              SWAP TOKENS
            </button>
          </div>

          <div className="flex justify-between text-zinc-50 text-sm mb-4 mt-5">
            <div>
              <div>
                1 {fromCrypto} = 34.4039 {toCrypto}
              </div>
              <div className="text-exchangeBalance text-xs">Free Exchange</div>
            </div>
            <div>
              <div>Updates in 4s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoExchange;
