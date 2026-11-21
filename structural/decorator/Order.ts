interface Order {
	getDescription(): string
	getPrice(): number
}

class BasicOrder implements Order {
	getDescription(): string {
		return "Oddiy buyurtma"
	}

	getPrice(): number {
		return 100.0
	}
}

abstract class OrderDecorator implements Order {
	protected order: Order

	constructor(order: Order) {
		this.order = order
	}

	getDescription(): string {
		return this.order.getDescription()
	}

	getPrice(): number {
		return this.order.getPrice()
	}
}

class GiftWrapDecorator extends OrderDecorator {
	getDescription(): string {
		return this.order.getDescription() + " + sovg'a qadoqlash"
	}

	getPrice(): number {
		return this.order.getPrice() + 15.0
	}
}

class ExpressDeliveryDecorator extends OrderDecorator {
	getDescription(): string {
		return this.order.getDescription() + " + tezkor yetkazib berish"
	}

	getPrice(): number {
		return this.order.getPrice() + 30.0
	}
}

const myOrder: Order = new BasicOrder()
console.log(`${myOrder.getDescription()} | Narxi: $${myOrder.getPrice()}`)

const wrappedOrder: Order = new GiftWrapDecorator(myOrder)
console.log(`${wrappedOrder.getDescription()} | Narxi: $${wrappedOrder.getPrice()}`)

const fullOrder: Order = new ExpressDeliveryDecorator(wrappedOrder)
console.log(`${fullOrder.getDescription()} | Narxi: $${fullOrder.getPrice()}`)