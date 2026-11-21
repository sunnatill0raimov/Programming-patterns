export interface FileSystem {
	show(): void
}

export class File implements FileSystem {
	constructor(private name: string) { }
	show(): void {
		console.log(`File nomi: ${this.name}`)
	}
}

export class Folder implements FileSystem {

	private items: FileSystem[] = [];

	constructor(private name: string) { }

	add(item: FileSystem): void {
		this.items.push(item)
	}

	remove(item: FileSystem): void {
		this.items = this.items.filter(i => i !== item)
	}

	show(): void {
		console.log(`Folder nomi: ${this.name}`)
		this.items.forEach(item => item.show())
	}
}

const computer = new Folder("Computer")

const documents = new Folder("Documents")
const photos = new Folder("Photos")


documents.add(new File("resume.pdf"))
documents.add(new File("homework.docx"))

photos.add(new File("photo1.jpg"))
photos.add(new File("photo2.jpg"))

computer.add(documents)
computer.add(photos)
computer.add(new File("music.mp3"))

computer.show()
