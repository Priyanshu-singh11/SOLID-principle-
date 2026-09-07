class PaymentMethod {
  pay(amount) {
    throw new Error("Method not implemented");
  }
}

class Card extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ₹${amount} using Card`);
  }
}

class UPI extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

function checkout(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

const upi = new UPI();
const card = new Card();

checkout(upi, 500);
checkout(card, 1000);
