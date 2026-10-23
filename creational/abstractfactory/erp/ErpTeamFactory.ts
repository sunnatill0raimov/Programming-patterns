import { ProjectTeamFactory } from '../ProjectTeamFactory';
import { Developer } from '../Developer';
import { Tester } from '../Tester';
import { ProjectManager } from '../ProjectManager';
import { JavaDeveloper } from './JavaDeveloper';
import { AutoTester } from './AutoTester';
import { ErpPM } from './ErpPM';

export class ErpTeamFactory implements ProjectTeamFactory {
    public getDeveloper(): Developer {
        return new JavaDeveloper();
    }

    public getTester(): Tester {
        return new AutoTester();
    }

    public getProjectManager(): ProjectManager {
        return new ErpPM();
    }
}

export default ErpTeamFactory;
