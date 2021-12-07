import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Rates from '../../components/Rates/Rates';
import Scroller from '../../components/Scroller/Scroller';
import Search from '../../components/Search/Search';
import { IRate, Rates as RatesModel } from '../../sdk/RatesModel';

function RatesPage(): JSX.Element {
  const [rates, setRates] = useState<IRate[]>([]);
  const [filtered, setFiltered] = useState<IRate[]>([]);
  const [hidden, setHidden] = useState(false);

  const filterData = async (text: string) => {
    const result = rates.filter(
      (rate: IRate) => rate.currency.toLowerCase().indexOf(text) !== -1);

      setFiltered(result);
  };

  const fetchData = async () => {
    const data = await new RatesModel().get();

    await setRates(data.fx);
    setFiltered(data.fx);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = async (text: string) => {
    await filterData(text);
  };

  Scroller((isHidden: boolean) => {
    setHidden(isHidden);
  });

  return <div className="flex flex-col bg-gray-200">
    <div className={hidden ? 'fixed' : ''}>
      <div className={hidden ? 'hidden' : 'block'}><Header/></div>
      <Search onSearch={onSearch} />
    </div>
    <Rates item={filtered} />
  </div>;
}

export default RatesPage;
