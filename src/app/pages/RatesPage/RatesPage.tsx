import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Rates from '../../components/Rates/Rates';
import Search from '../../components/Search/Search';
import { IRates, Rates as RatesModel } from '../../sdk/RatesModel';

function RatesPage(): JSX.Element {
  const [rates, setRates] = useState<IRates>(new RatesModel());

  useEffect(() => {
    const url = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setRates(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <div className="bg-gray-200">
    <Header />
    <Search />
    <Rates item={rates.fx}/>
  </div>;
}

export default RatesPage;
