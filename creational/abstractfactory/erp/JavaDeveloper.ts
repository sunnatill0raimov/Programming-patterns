import { Developer } from '../Developer';

export class JavaDeveloper implements Developer {
    public writeCode(): void {
        console.log("Java Developer write ERP code");
    }
}

export default JavaDeveloper;
