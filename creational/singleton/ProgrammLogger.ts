export class ProgrammLogger {
    private static instance: ProgrammLogger | null = null;
    private static logFile: string = "This is log file. \n";

    private constructor() {}

    public static getProgrammLogger(): ProgrammLogger {
        if (!ProgrammLogger.instance) {
            ProgrammLogger.instance = new ProgrammLogger();
        }
        return ProgrammLogger.instance;
    }

    public addLogInfo(info: string): void {
        ProgrammLogger.logFile += info + "\n";
    }

    public showLogInfo(): void {
        console.log(ProgrammLogger.logFile);
    }
}

export default ProgrammLogger;
