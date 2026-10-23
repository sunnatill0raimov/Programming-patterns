import { WebsiteBuilder } from './WebsiteBuilder';
import { Website } from './Website';

export class Director {
    private builder: WebsiteBuilder | null = null;

    public setWebsite(builder: WebsiteBuilder): void {
        this.builder = builder;
    }

    public buildWebsite(): Website {
        if (!this.builder) {
            throw new Error("Builder is not set");
        }
        return this.builder
            .createWebsite()
            .buildName()
            .buildCms()
            .buildPrice()
            .getWebsite();
    }
}

export default Director;
