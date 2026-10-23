import { ProjectManager } from '../ProjectManager';

export class ErpPM implements ProjectManager {
    public manage(): void {
        console.log("ProjectManager manage ERP");
    }
}

export default ErpPM;
