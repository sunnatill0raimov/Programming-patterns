
import BlockType from "./BlockType"

class BlockFactory {
	private blockTypes: Map<string, BlockType> = new Map();

	private blockData = {
		Grass: {
			texture: "grass.png",
			color: "Green"
		},
		Stone: {
			texture: "stone.png",
			color: "Gray"
		},
		Dirt: {
			texture: "dirt.png",
			color: "Brown"
		},
		Water: {
			texture: "water.png",
			color: "Blue"
		}
	};

	getBlockType(name: string): BlockType {
		// 1. Avval Map ichidan qidiramiz
		const existingType = this.blockTypes.get(name)

		// 2. Agar mavjud bo'lsa, o'shani qaytaramiz
		if (existingType) {
			return existingType
		}

		// 3. Agar mavjud bo'lmasa, yangi obyekt yaratamiz
		const data = this.blockData[
			name as keyof typeof this.blockData
		]

		if (!data) {
			throw new Error(`Unknown block type: ${name}`)
		}

		const newType = new BlockType(
			name,
			data.texture,
			data.color
		)

		// 4. Yangi obyektni Map ichida saqlaymiz
		this.blockTypes.set(name, newType)

		// 5. Yangi obyektni qaytaramiz
		return newType
	}

	getUniqueTypeCount(): number {
		return this.blockTypes.size
	}
}

export default BlockFactory
