import { ProjectManager } from '../ProjectManager';

export class LearningPM implements ProjectManager {
    public manage(): void {
        console.log("LearningPM manage learning system");
    }
}

export default LearningPM;
