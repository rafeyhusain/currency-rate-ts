import React from 'react';
import ReactDOM from 'react-dom';
import { IRate } from '../../sdk/RatesModel';
import Rate from './Rate';

test("renders without crash", ()=> {
  const div = document.createElement("div");
  let rate:IRate = JSON.parse(`{
        "currency":"FJD",
        "precision":2,
        "nameI18N":"Fiji Dollar",
        "exchangeRate":{
          "buy":2.0000000,
          "middle":2.2500000,
          "sell":2.5000000,
          "indicator":0,
          "lastModified":"2012-02-14T23:00:00Z"
        },
        "banknoteRate":{
          "buy":2.2000000,
          "middle":2.4000000,
          "sell":2.6000000,
          "indicator":0,
          "lastModified":"2018-11-06T23:00:00Z"
        },
        "flags":[
          "provided"
        ]
    }`);

  ReactDOM.render(<Rate {...rate}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})