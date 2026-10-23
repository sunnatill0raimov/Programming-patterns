import { Developer } from '../Developer';

export class PythonDeveloper implements Developer {
    public writeCode(): void {
        console.log("Python Developer write code for learning system");
    }
}

export default PythonDeveloper;
