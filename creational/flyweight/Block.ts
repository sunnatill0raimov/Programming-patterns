import BlockType from './BlockType'

class Block {

	constructor(
		public readonly x: number,
		public readonly y: number,
		public readonly z: number,
		public readonly type: BlockType
	) { }

	render(): void {
		console.log(
			`Block: ${this.type.name} | ` +
			`Position: (${this.x}, ${this.y}, ${this.z}) | ` +
			`Texture: ${this.type.texture} | ` +
			`Color: ${this.type.color}`
		)
	}

}

export default Block