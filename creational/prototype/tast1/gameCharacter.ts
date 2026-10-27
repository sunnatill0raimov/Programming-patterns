import Copyable from "./copyAble"

export default class GameCharacter implements Copyable {
	private id: number
	private name: string
	private level: number
	private weapon: string


	constructor(id: number, name: string, level: number, weapon: string) {
		this.id = id
		this.name = name
		this.level = level
		this.weapon = weapon
	}

	public clone(): GameCharacter {
		return new GameCharacter(this.id, this.name, this.level, this.weapon)
	}


	public getId(): number {
		return this.id
	}

	public getName(): string {
		return this.name
	}

	public getLevel(): number {
		return this.level
	}

	public getWeapon(): string {
		return this.weapon
	}

	public setId(id: number): void {
		this.id = id
	}

	public setName(name: string): void {
		this.name = name
	}

	public setLevel(level: number): void {
		this.level = level
	}

	public setWeapon(weapon: string): void {
		this.weapon = weapon
	}

	public toString() {
		return `GameCharacter [id=${this.id}, name=${this.name}, level=${this.level}, weapon=${this.weapon}]`
	}


}