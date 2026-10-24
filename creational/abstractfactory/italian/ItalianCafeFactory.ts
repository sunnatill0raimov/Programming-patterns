import { CafeFactory } from '../CafeFactory';
import { Coffee } from '../Coffee';
import { Dessert } from '../Dessert';
import { Espresso } from './Espresso';
import { Tiramisu } from './Tiramisu';

export class ItalianCafeFactory implements CafeFactory {
    public createCoffee(): Coffee {
        return new Espresso();
    }

    public createDessert(): Dessert {
        return new Tiramisu();
    }
}

export default ItalianCafeFactory;
