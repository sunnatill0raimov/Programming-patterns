
import World from "./World"

const world = new World()

world.addBlock(0, 0, 0, "Grass")
world.addBlock(1, 0, 0, "Grass")
world.addBlock(2, 0, 0, "Stone")
world.addBlock(3, 0, 0, "Grass")
world.addBlock(4, 0, 0, "Dirt")

world.render()



const blocks = world.getBlocks()

// Birinchi va ikkinchi blok ikkalasi ham Grass
console.log(
	"Grass blocks bir xilmi?",
	blocks[0].type == blocks[1].type
)

// Birinchi va to'rtinchi blok ham Grass
console.log(
	"Grass blocks bir xilmi?",
	blocks[0].type == blocks[3].type
)

// Grass va Stone bir xilmi?
console.log(
	"Grass va Stone bir xilmi?",
	blocks[0].type == blocks[2].type
)
