import { Tester } from '../Tester';

export class AutoTester implements Tester {
    public testing(): void {
        console.log("AutoTester testing ERP");
    }
}

export default AutoTester;
