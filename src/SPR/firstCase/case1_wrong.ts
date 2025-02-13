class Booking {
    processBooking(booking: any) {
        // valiation data
        if(booking.startDate > booking.endDate) {
            throw new Error("Invalid booking dates. Start date must be before end date.");
        }

        // calculate price
        const durationInDays = Math.ceil(
            (booking.endDate - booking.startDate) / (1000 * 60 * 60 * 24)
        )

        const totalPrice = booking.dailyRate * durationInDays

        console.log("Price calculdated" + totalPrice)


        console.log("send email....")

    }
}