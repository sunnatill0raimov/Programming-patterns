import { Coffee } from '../Coffee';

export class Espresso implements Coffee {
    public brew(): void {
        console.log("Espresso tayyorlanmoqda: kuchli va xushbo'y italiyacha qahva.");
    }
}

export default Espresso;
