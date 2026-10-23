import { Director } from './Director';
import { SimpleWebsiteBuilder } from './SimpleWebsiteBuilder';

export class Program {
    public static main(): void {
        const director = new Director();
        director.setWebsite(new SimpleWebsiteBuilder());
        console.log(director.buildWebsite().toString());
    }
}

if (require.main === module) {
    Program.main();
}

export default Program;
