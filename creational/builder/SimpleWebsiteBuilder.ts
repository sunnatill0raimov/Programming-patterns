import { WebsiteBuilder } from './WebsiteBuilder';
import { Cms } from './Cms';

export class SimpleWebsiteBuilder extends WebsiteBuilder {
    public buildName(): this {
        this.website.setName("Simple Website Builder");
        return this;
    }

    public buildCms(): this {
        this.website.setCms(Cms.TILDA);
        return this;
    }

    public buildPrice(): this {
        this.website.setPrice(500);
        return this;
    }
}

export default SimpleWebsiteBuilder;
