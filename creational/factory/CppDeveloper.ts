import { Developer } from './Developer';

export class CppDeveloper implements Developer {
    public writeCode(): void {
        console.log("C++ writes C++ code");
    }
}

export default CppDeveloper;
