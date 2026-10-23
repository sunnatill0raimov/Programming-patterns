import { WebsiteBuilder } from './WebsiteBuilder';
import { Cms } from './Cms';

export class EnterpriseWebsiteBuilder extends WebsiteBuilder {
    public buildName(): this {
        this.website.setName("Enterprise Website");
        return this;
    }

    public buildCms(): this {
        this.website.setCms(Cms.WORDPRESS);
        return this;
    }

    public buildPrice(): this {
        this.website.setPrice(1000);
        return this;
    }
}

export default EnterpriseWebsiteBuilder;
