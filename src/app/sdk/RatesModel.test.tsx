import { Rates, IRate } from './RatesModel';

test('Search USD should return 1 currency', () => {
  const ratesData: IRate[] = JSON.parse(`[{
      "currency":"USD",
      "precision":2,
      "nameI18N":"US Dollar",
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
    }]`);

  const sdkRate = new Rates();

  const rates = sdkRate.filterRates(ratesData, 'USD');

  expect(rates.length).toBe(1);
});
