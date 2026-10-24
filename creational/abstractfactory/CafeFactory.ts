import { Coffee } from './Coffee';
import { Dessert } from './Dessert';

export interface CafeFactory {
    createCoffee(): Coffee;
    createDessert(): Dessert;
}

export default CafeFactory;
