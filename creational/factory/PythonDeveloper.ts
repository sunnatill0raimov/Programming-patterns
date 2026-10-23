import { Developer } from './Developer';

export class PythonDeveloper implements Developer {
    public writeCode(): void {
        console.log("Python developer writes python3 code");
    }
}

export default PythonDeveloper;
