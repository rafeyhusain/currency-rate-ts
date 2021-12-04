import React from 'react';
import { IRate } from '../../sdk/RatesModel';

function Rate(item: IRate): JSX.Element {
  const url = `./src/app/assets/flags/${item.currency.substring(0, 2)}.png`;

  function handleFlagError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.target.onerror = null;
    e.target.src = './src/app/assets/flags/naa.png';
  }

  return <div className="grid grid-cols-3 gap-4 hover:bg-gray-200 my-2 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div><img className="" src={url} alt={item.nameI18N} onError={e => handleFlagError(e)} /></div>
    <div><div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.nameI18N ? item.nameI18N : '-'}</div></div>
    <div><a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.currency ? item.currency : '-'}</a></div>
    <div className="flex flex-row-reverse">
      <div><p className="mt-2 text-gray-500">{item.exchangeRate && <div>{item.exchangeRate.buy ? item.exchangeRate.buy : '-'} EUR</div>}</p></div>
    </div>
  </div>
}

export default Rate;
