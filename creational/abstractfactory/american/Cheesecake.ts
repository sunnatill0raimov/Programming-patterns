import { Dessert } from '../Dessert';

export class Cheesecake implements Dessert {
    public serve(): void {
        console.log("Cheesecake tortilmoqda: Nyu-York uslubidagi shirin pishloqli desert.");
    }
}

export default Cheesecake;
