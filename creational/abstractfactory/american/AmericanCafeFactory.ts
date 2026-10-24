import { CafeFactory } from '../CafeFactory';
import { Coffee } from '../Coffee';
import { Dessert } from '../Dessert';
import { Americano } from './Americano';
import { Cheesecake } from './Cheesecake';

export class AmericanCafeFactory implements CafeFactory {
    public createCoffee(): Coffee {
        return new Americano();
    }

    public createDessert(): Dessert {
        return new Cheesecake();
    }
}

export default AmericanCafeFactory;
