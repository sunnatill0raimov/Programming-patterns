import CharacterFactory from "./characterFactory"
import GameCharacter from "./gameCharacter"

function main() {
	const original = new GameCharacter(1, "Warrior", 10, "Sword")
	console.log("Original qahramon:", original.toString())

	const factory = new CharacterFactory(original)

	const clone1 = factory.cloneCharacter()
	const clone2 = factory.cloneCharacter()

	clone1.setId(2)
	clone1.setName("Shadow Warrior")
	clone1.setLevel(15)
	clone1.setWeapon("Dual Daggers")

	clone2.setId(3)
	clone2.setName("Berserker")
	clone2.setLevel(20)
	clone2.setWeapon("Battle Axe")

	console.log("\nKlon 1:", clone1.toString())
	console.log("Klon 2:", clone2.toString())
	console.log("Original (o'zgarmagan):", original.toString())
	console.log("\noriginal === clone1:", original === clone1)
	console.log("clone1 === clone2:", clone1 === clone2)
}

main()
