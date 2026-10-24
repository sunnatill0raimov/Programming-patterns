import { Dessert } from '../Dessert';

export class Tiramisu implements Dessert {
    public serve(): void {
        console.log("Tiramisu tortilmoqda: maskarpone pishlog'i va qahvali klassik italyan shirinligi.");
    }
}

export default Tiramisu;
