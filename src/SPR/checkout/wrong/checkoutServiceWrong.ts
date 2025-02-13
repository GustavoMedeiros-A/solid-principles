
class CheckoutServiceWrong {
    processCheckout(cart: any, userId: string) {
        for(const item of cart.items) {
            if(item.stock < item.quantity) {
                throw new Error("Not enough stock for item: " + item.name);
            }
        }

        // // Calc imposto
        // const taxRate = 0.1; // Taxa fixa de 10%
        // return subtotal * taxRate;
    }
}