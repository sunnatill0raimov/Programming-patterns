import GameCharacter from "./gameCharacter"

export default class CharacterFactory {
	private prototype: GameCharacter

	constructor(prototype: GameCharacter) {
		this.prototype = prototype
	}

	public setCharacter(prototype: GameCharacter): void {
		this.prototype = prototype
	}

	public cloneCharacter(): GameCharacter {
		return this.prototype.clone()
	}
}
