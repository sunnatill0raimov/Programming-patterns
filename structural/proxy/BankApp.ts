import BankAccount from "./BankAccount"
import BankAccountProxy from "./BankAccountProxy"

class BankApp {
	static main(): void {
		console.log("===== 1-TEST: LOGIN QILGAN =====")

		const loggedInAccount: BankAccount =
			new BankAccountProxy(true)

		loggedInAccount.withdraw(200)

		console.log("\n===== 2-TEST: LOGIN QILMAGAN =====")

		const unauthorizedAccount: BankAccount =
			new BankAccountProxy(false)

		unauthorizedAccount.withdraw(500)
	}
}

BankApp.main()
