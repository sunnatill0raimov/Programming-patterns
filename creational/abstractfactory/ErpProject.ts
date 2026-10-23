import { LearningTeamFactory } from './learning/LearningTeamFactory';

export class ErpProject {
    public static main(): void {
        const teamFactory = new LearningTeamFactory();
        const developer = teamFactory.getDeveloper();
        const tester = teamFactory.getTester();
        const projectManager = teamFactory.getProjectManager();

        developer.writeCode();
        tester.testing();
        projectManager.manage();
    }
}

if (require.main === module) {
    ErpProject.main();
}

export default ErpProject;
