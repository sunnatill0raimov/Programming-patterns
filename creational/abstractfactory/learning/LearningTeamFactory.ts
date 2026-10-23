import { ProjectTeamFactory } from '../ProjectTeamFactory';
import { Developer } from '../Developer';
import { Tester } from '../Tester';
import { ProjectManager } from '../ProjectManager';
import { PythonDeveloper } from './PythonDeveloper';
import { ManualTester } from './ManualTester';
import { LearningPM } from './LearningPM';

export class LearningTeamFactory implements ProjectTeamFactory {
    public getDeveloper(): Developer {
        return new PythonDeveloper();
    }

    public getTester(): Tester {
        return new ManualTester();
    }

    public getProjectManager(): ProjectManager {
        return new LearningPM();
    }
}

export default LearningTeamFactory;
