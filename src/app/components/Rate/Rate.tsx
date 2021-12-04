import React from 'react';
import { IRate } from '../../sdk/RatesModel';
import classes from './Rate.module.css';

function Rate(item: IRate): JSX.Element {
  const url = `./src/app/assets/flags/${item.currency.substring(0, 2)}.png`;

  return <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="w-full object-cover md:h-full md:w-48" src={url} alt={item.nameI18N} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.nameI18N}</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.currency}</a>
        <p className="mt-2 text-gray-500">{item.exchangeRate && <div>{item.exchangeRate.buy} EUR</div>}</p>
      </div>
    </div>
  </div>
}

export default Rate;
