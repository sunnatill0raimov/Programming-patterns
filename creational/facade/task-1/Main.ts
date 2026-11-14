import FlightBooking from "./FlightBooking"
import HotelBooking from "./HotelBooking"
import Payment from "./Payment"


class TravelFacade {
	private flight: FlightBooking
	private hotel: HotelBooking
	private payment: Payment

	constructor() {
		this.flight = new FlightBooking()
		this.hotel = new HotelBooking()
		this.payment = new Payment()
	}

	bookTrip() {
		console.log("Sayohatni bron qilish boshlandi!")

		this.flight.bookingFlight()
		this.hotel.bookHotel()
		this.payment.makePayment()

		console.log("Sayohat muvaffaqiyatli bron qilindi!")
	}

	cancelTrip() {
		console.log("Sayohatni bekor qilish boshlandi!")

		this.flight.cancelFlight()
		this.hotel.cancelHotel()
		this.payment.cancelPayment()

		console.log("Sayohat muvaffaqiyatli bekor qilindi!")
	}
}


const travel = new TravelFacade()

travel.bookTrip()

console.log("----------------")

travel.cancelTrip()