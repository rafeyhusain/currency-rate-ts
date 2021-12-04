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

  return <>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
        </div>
    <Header />
    <Search />
    <Rates item={rates.fx}/>
  </>;
}

export default RatesPage;
