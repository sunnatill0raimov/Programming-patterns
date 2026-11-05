interface Developer {
	writeCode(): void
}

class JavaDeveloper implements Developer {
	writeCode(): void {
		console.log("Java dasturchisi kod yozmoqda.")
	}
}

class CppDeveloper implements Developer {
	writeCode(): void {
		console.log("C++ dasturchisi kod yozmoqda.")
	}
}

abstract class Game {
	protected developer: Developer

	constructor(developer: Developer) {
		this.developer = developer
	}

	abstract developGame(): void
}

class RacingGame extends Game {
	developGame(): void {
		console.log("Poyga o'yini yaratilmoqda:")
		this.developer.writeCode()
	}
}

class FootballGame extends Game {
	developGame(): void {
		console.log("Futbol o'yini yaratilmoqda:")
		this.developer.writeCode()
	}
}

const game1 = new RacingGame(new JavaDeveloper())
const game2 = new RacingGame(new CppDeveloper())

const game3 = new FootballGame(new JavaDeveloper())
const game4 = new FootballGame(new CppDeveloper())


game1.developGame()
console.log("---------------")

game2.developGame()
console.log("---------------")

game3.developGame()
console.log("---------------")

game4.developGame()
