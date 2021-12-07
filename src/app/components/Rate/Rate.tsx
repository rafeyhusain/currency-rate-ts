import React from 'react';
import { IRate } from '../../sdk/RatesModel';

function Rate(item: IRate): JSX.Element {
  const url = `./src/app/assets/flags/${item.currency.substring(0, 2)}.png`;

  const handleFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.target.onerror = null;
    e.target.src = './src/app/assets/flags/naa.png';
  }

  return <>
    <div className="grid grid-cols-2 mb-2 align-middle bg-gray-100 rounded-xl hover:bg-gray-200">
      <div>
        <div className="flex flex-cols-3 gap-5">
          <div>
            <img className="align-middle" src={url} alt={item.nameI18N} onError={e => handleFlagError(e)} />
          </div>
          <div className="text-gray-700 font-semibold">
            {item.currency ? item.currency : '-'}
          </div>
          <div className="flex-initial">
            {item.nameI18N ? item.nameI18N : '-'}
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-700 text-right align-middle mr-5">
          {item.exchangeRate && <span>{item.exchangeRate.buy ? +item.exchangeRate.buy.toFixed(2) : 'NA'} EUR</span>}
        </div>
      </div>
    </div>

  </>
}

export default Rate;
