import { Coffee } from '../Coffee';

export class Americano implements Coffee {
    public brew(): void {
        console.log("Americano tayyorlanmoqda: espresso ustiga issiq suv qo'shilgan yengil qahva.");
    }
}

export default Americano;
