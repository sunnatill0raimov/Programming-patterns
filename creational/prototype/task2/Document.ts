import Copyable from './Copyable'

export default class Document implements Copyable {
	private id: number
	private title: string
	private content: string
	private author: string
	private tags: string[]

	constructor(source: Document)
	constructor(id: number, title: string, content: string, author: string, tags: string[])
	constructor(
		idOrSource: number | Document,
		title?: string,
		content?: string,
		author?: string,
		tags?: string[]
	) {
		if (idOrSource instanceof Document) {
			this.id = idOrSource.id
			this.title = idOrSource.title
			this.content = idOrSource.content
			this.author = idOrSource.author
			this.tags = [...idOrSource.tags]
		} else {
			this.id = idOrSource
			this.title = title ?? ''
			this.content = content ?? ''
			this.author = author ?? ''
			this.tags = tags ? [...tags] : []
		}
	}

	public clone(): Document {
		return new Document(this)
	}

	public getId(): number {
		return this.id
	}

	public getTitle(): string {
		return this.title
	}

	public getContent(): string {
		return this.content
	}

	public getAuthor(): string {
		return this.author
	}

	public getTags(): string[] {
		return this.tags
	}

	public setId(id: number): void {
		this.id = id
	}

	public setTitle(title: string): void {
		this.title = title
	}

	public setContent(content: string): void {
		this.content = content
	}

	public setAuthor(author: string): void {
		this.author = author
	}

	public setTags(tags: string[]): void {
		this.tags = [...tags]
	}

	public addTag(tag: string): void {
		this.tags.push(tag)
	}

	public toString(): string {
		return `Document [id=${this.id}, title="${this.title}", content="${this.content}", author="${this.author}", tags=[${this.tags.join(', ')}]]`
	}
}