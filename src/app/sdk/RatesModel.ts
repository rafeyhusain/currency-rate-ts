import { Env } from "./Env";

export interface ExchangeRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: Date;
}

export interface BanknoteRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: Date;
}

export interface IRate {
    currency: string;
    precision: number;
    nameI18N: string;
    exchangeRate: ExchangeRate;
    banknoteRate: BanknoteRate;
    flags: string[];
    denominations: number[];
}

export interface IRates {
    institute: number;
    lastUpdated: Date;
    comparisonDate: Date;
    baseCurrency: string;
    fx: IRate[];
}

export class Rates implements IRates {
    institute!: number;
    lastUpdated!: Date;
    comparisonDate!: Date;
    baseCurrency!: string;
    fx!: IRate[];

    constructor() {
    }

    async get(): Promise<IRates> {
        try {
            const response = await fetch(Env.API_URL);
            const rates: IRates = await response.json();

            return rates;
        } catch (error) {
            console.log("error", error);
        }

        return new Rates();
    }
}