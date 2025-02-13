class BookingService {
    constructor(
        private validator: BookingValidator,
        private emailSender: BookingSendEmail,
        private calculator: BookingCalculator
    ) {}

    processBooking(booking: any) {
        this.validator.validateBooking(booking.startDate, booking.endDate)
        const totalPrice = this.calculator.calculatePrice(booking);
        console.log("totalPrice", totalPrice);
        this.emailSender.sendEmail(booking);
    }
}