import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Rates from '../../components/Rates/Rates';
import Scroller from '../../components/Scroller/Scroller';
import Search from '../../components/Search/Search';
import { IRate, Rates as RatesModel } from '../../sdk/RatesModel';
import { useParams } from "react-router";

function RatesPage(): JSX.Element {
  const { currency } = useParams<{currency: string}>();
  const [rates, setRates] = useState<IRate[]>([]);
  const [filtered, setFiltered] = useState<IRate[]>([]);
  const [hidden, setHidden] = useState(false);

  const filterData = async (text: string) => {
    const result = rates.filter(
      (rate: IRate) => rate.currency.toLowerCase().indexOf(text.toLowerCase()) !== -1);

    setFiltered(result);
  };

  const fetchData = async () => {
    const data = await new RatesModel().get();

    await setRates(data.fx);
    await setFiltered(data.fx);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currency) {
      filterData(currency);
    }
  }, [rates]);

  const onSearch = async (text: string) => {
    await filterData(text);
  };

  Scroller((isHidden: boolean) => {
    setHidden(isHidden);
  });

  let content;
  if (filtered.length > 0) {
    content = <Rates item={filtered} />
  } else {
    content = <h1>No matching currency found</h1>
  }

  return <div className="flex flex-col bg-gray-200">
    <div className={hidden ? 'fixed' : ''}>
      <div className={hidden ? 'hidden' : 'block'}><Header /></div>
      <Search onSearch={onSearch} />
    </div>
    {content}
  </div>;
}

export default RatesPage;
