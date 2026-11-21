interface NotificationService {
	send(recipient: string, message: string): void
}

class SmsNotificationService
	implements NotificationService {
	send(recipient: string, message: string): void {
		console.log(
			`SMS ${recipient} raqamiga yuborildi: ${message}`
		)
	}
}

class TelegramClient {
	sendTelegramMessage(
		chatId: string,
		text: string
	): void {
		console.log(
			`Telegram ${chatId} ga yuborildi: ${text}`
		)
	}
}

class TelegramAdapter implements NotificationService {
	constructor(private telegramClient: TelegramClient) { }

	send(recipient: string, message: string): void {
		this.telegramClient.sendTelegramMessage(
			recipient,
			message
		)
	}
}

class EmailClient {
	sendEmialMessage(
		emailAddress: string,
		subject: string,
		body: string
	): void {
		console.log(
			`Email ${emailAddress} ga yuborildi`
		)
		console.log(`Mavzu: ${subject}`)
		console.log(`Xabar: ${body}`)
	}
}


class EmailAdapter implements NotificationService {
	constructor(private emailClient: EmailClient) { }

	send(recipient: string, message: string): void {
		this.emailClient.sendEmialMessage(
			recipient,
			"Bildirishnoma",
			message
		)
	}
}

class NotificationManager {
	constructor(
		private service: NotificationService
	) { }

	notify(recipient: string, message: string): void {
		this.service.send(recipient, message)
	}
}

// SMS
const smsService = new SmsNotificationService()
const smsManager = new NotificationManager(smsService)

smsManager.notify(
	"+998901234567",
	"Buyurtmangiz tayyor!"
)

// Telegram
const telegramClient = new TelegramClient()
const telegramAdapter = new TelegramAdapter(telegramClient)
const telegramManager = new NotificationManager(telegramAdapter)

telegramManager.notify(
	"123456789",
	"Salom, Telegram!"
)

// Email
const emailClient = new EmailClient()
const emailAdapter = new EmailAdapter(emailClient)
const emailManager = new NotificationManager(emailAdapter)

emailManager.notify(
	"user@example.com",
	"Hisobingiz muvaffaqiyatli yaratildi!"
)