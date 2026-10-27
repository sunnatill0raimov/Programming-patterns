export interface Coffee {
	drink(): void;
}

export interface Dessert {
	eat(): void;
}

export class Espresso implements Coffee {
	drink(): void {
		console.log("Espresso ichildi");
	}
}

export class Tiramisu implements Dessert {
	eat(): void {
		console.log("Tiramisu yeyildi");
	}
}

export class Americano implements Coffee {
	drink(): void {
		console.log("Americano ichildi");
	}
}

export class Cheesecake implements Dessert {
	eat(): void {
		console.log("Cheesecake yeyildi");
	}
}

export interface CafeFactory {
	createCoffee(): Coffee;
	createDessert(): Dessert;
}

export class ItalianCafeFactory implements CafeFactory {
	createCoffee(): Coffee {
		return new Espresso();
	}
	createDessert(): Dessert {
		return new Tiramisu();
	}
}

export class AmericanCafeFactory implements CafeFactory {
	createCoffee(): Coffee {
		return new Americano();
	}
	createDessert(): Dessert {
		return new Cheesecake();
	}
}

export function orderCombo(factory: CafeFactory): void {
	const coffee = factory.createCoffee();
	const dessert = factory.createDessert();

	coffee.drink();
	dessert.eat();
}

function main(): void {
	console.log("1. Italiya kafesi buyurtmasi");
	orderCombo(new ItalianCafeFactory());

	console.log("2. Amerika kafesi buyurtmasi");
	orderCombo(new AmericanCafeFactory());
}

main();
