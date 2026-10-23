import { DeveloperFactory } from './DeveloperFactory';
import { CppDeveloperFactory } from './CppDeveloperFactory';
import { PythonDeveloperFactory } from './PythonDeveloperFactory';

export class Program {
    public static main(): void {
        const pythonDeveloperFactory = Program.getDeveloperFactory("Python");
        const developer = pythonDeveloperFactory.createDeveloper();
        developer.writeCode();

        const cppDeveloperFactory = Program.getDeveloperFactory("C++");
        const developer2 = cppDeveloperFactory.createDeveloper();
        developer2.writeCode();
    }

    public static getDeveloperFactory(language: string): DeveloperFactory {
        if (language === "C++") {
            return new CppDeveloperFactory();
        } else if (language === "Python") {
            return new PythonDeveloperFactory();
        } else {
            throw new Error(`Unknown language: ${language}`);
        }
    }
}

if (require.main === module) {
    Program.main();
}

export default Program;
