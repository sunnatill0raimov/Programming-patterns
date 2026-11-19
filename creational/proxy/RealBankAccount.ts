
import BankAccount from "./BankAccount"

class RealBankAccount implements BankAccount {
	private balance: number = 1000;

	withdraw(amount: number): void {
		if (amount <= 0) {
			console.log("Xato: summa musbat bo'lishi kerak!")
			return
		}

		if (amount > this.balance) {
			console.log("Xato: mablag' yetarli emas!")
			return
		}

		this.balance -= amount

		console.log(`${amount} so'm yechildi.`)
		console.log(`Qolgan balans: ${this.balance} so'm`)
	}
}

export default RealBankAccount