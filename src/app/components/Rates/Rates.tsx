import React from 'react';
import { IRate } from '../../sdk/RatesModel';
import Rate from '../Rate/Rate';
import classes from './Rates.module.css';

type RatesProps = {
  item: IRate[];
};

function Rates({item}: RatesProps): JSX.Element {
  if (!item) {
    return <div>Not found</div>
  }
  return <div className={classes.rates}>
    {item.map((item: IRate) => <Rate key={item.currency} {...item}></Rate>)}
  </div>;
}

export default Rates;
