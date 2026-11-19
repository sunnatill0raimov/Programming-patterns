
import Block from "./Block"
import BlockFactory from './BlockFactory'


class World {
	private blocks: Block[] = [];
	private factory: BlockFactory = new BlockFactory();

	addBlock(
		x: number,
		y: number,
		z: number,
		typeName: string
	): void {
		// Factory orqali BlockType olamiz
		const type = this.factory.getBlockType(typeName)

		// Yangi koordinatalarga ega Block yaratamiz
		const block = new Block(x, y, z, type)

		// Dunyo ichiga qo'shamiz
		this.blocks.push(block)
	}

	render(): void {
		console.log("===== MINECRAFT WORLD =====")

		this.blocks.forEach(block => {
			block.render()
		})

		console.log("===========================")
		console.log("Total blocks:", this.blocks.length)
		console.log(
			"Unique BlockTypes:",
			this.factory.getUniqueTypeCount()
		)
	}

	getBlocks(): Block[] {
		return this.blocks
	}
}

export default World
