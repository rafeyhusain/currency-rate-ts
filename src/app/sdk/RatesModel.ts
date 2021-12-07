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
        const url = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";
        
        try {
            const response = await fetch(url);
            const rates: IRates = await response.json();

            return rates;
        } catch (error) {
            console.log("error", error);
        }

        return new Rates();
    }
}