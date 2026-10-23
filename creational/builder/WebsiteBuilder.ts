import { Website } from './Website';

export abstract class WebsiteBuilder {
    protected website: Website = new Website();

    public createWebsite(): this {
        this.website = new Website();
        return this;
    }

    public abstract buildName(): this;
    public abstract buildCms(): this;
    public abstract buildPrice(): this;

    public getWebsite(): Website {
        return this.website;
    }
}

export default WebsiteBuilder;
