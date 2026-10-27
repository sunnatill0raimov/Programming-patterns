import Document from './Document';

export default class DocumentFactory {
	private prototype: Document

	constructor(prototype: Document) {
		this.prototype = prototype
	}

	public setPrototype(prototype: Document): void {
		this.prototype = prototype
	}

	public cloneDocument(): Document {
		return this.prototype.clone()
	}
}