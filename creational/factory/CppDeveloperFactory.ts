import { DeveloperFactory } from './DeveloperFactory';
import { Developer } from './Developer';
import { CppDeveloper } from './CppDeveloper';

export class CppDeveloperFactory implements DeveloperFactory {
    public createDeveloper(): Developer {
        return new CppDeveloper();
    }
}

export default CppDeveloperFactory;
