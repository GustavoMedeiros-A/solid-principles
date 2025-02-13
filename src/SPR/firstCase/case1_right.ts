class BookingValidator {
    validateBooking(bookingStart: any, bookingEnd: any) {
        if(bookingStart > bookingEnd) {
            throw new Error("Invalid booking dates. Start date must be before end date.");
        }
    }
}

class BookingSendEmail {
    sendEmail(booking: any) {
        console.log("Email sent to " + booking.customerEmail)
    }
}

class BookingCalculator {
    calculatePrice(booking: any) {
        const durationInDays = Math.ceil(
            (booking.endDate - booking.startDate) / (1000 * 60 * 60 * 24)
        )

        const totalPrice = booking.dailyRate * durationInDays

        console.log("Price calculdated" + totalPrice)
    }
}