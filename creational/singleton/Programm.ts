import { ProgrammLogger } from './ProgrammLogger';

export class Programm {
    public static main(): void {
        const programmLogger = ProgrammLogger.getProgrammLogger();
        programmLogger.addLogInfo("Starting math processing");
        programmLogger.addLogInfo("Math processing success");
        programmLogger.showLogInfo();

        const programmLogger2 = ProgrammLogger.getProgrammLogger();
        programmLogger2.showLogInfo();

        console.log(programmLogger === programmLogger2);
    }
}

if (require.main === module) {
    Programm.main();
}

export default Programm;
