import BankAccount from "./BankAccount"
import RealBankAccount from "./RealBankAccount"

class BankAccountProxy implements BankAccount {
	private realAccount: RealBankAccount
	private isAuthenticated: boolean

	constructor(isAuthenticated: boolean) {
		this.realAccount = new RealBankAccount()
		this.isAuthenticated = isAuthenticated
	}

	withdraw(amount: number): void {
		console.log("Pul yechish so'rovi yuborildi...")

		if (!this.isAuthenticated) {
			console.log("Xatolik: foydalanuvchi tizimga kirmagan!")
			console.log("Operatsiya rad etildi.")
			return
		}

		console.log("Avtorizatsiya muvaffaqiyatli!")

		// So'rov haqiqiy bank hisobiga uzatiladi
		this.realAccount.withdraw(amount)
	}
}

export default BankAccountProxy