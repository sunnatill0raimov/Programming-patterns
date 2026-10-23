import { DeveloperFactory } from './DeveloperFactory';
import { Developer } from './Developer';
import { PythonDeveloper } from './PythonDeveloper';

export class PythonDeveloperFactory implements DeveloperFactory {
    public createDeveloper(): Developer {
        return new PythonDeveloper();
    }
}

export default PythonDeveloperFactory;
