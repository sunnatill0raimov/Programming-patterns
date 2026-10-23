import { Cms } from './Cms';

export class Website {
    private name: string | null = null;
    private cms: Cms | string | null = null;
    private price: number | null = null;

    public setName(name: string): void {
        this.name = name;
    }

    public setCms(cms: Cms | string): void {
        this.cms = cms;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public toString(): string {
        return `Website{name='${this.name}', cms=${this.cms}, price=${this.price}}`;
    }
}

export default Website;
