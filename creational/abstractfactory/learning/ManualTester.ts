import { Tester } from '../Tester';

export class ManualTester implements Tester {
    public testing(): void {
        console.log("ManualTester testing learning system");
    }
}

export default ManualTester;
