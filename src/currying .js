// Currying  /function curry
//------------ Normal Function
// const add = (a ,  b) => a + b;
//------------ Currying   Function
const add = (a) => (b) => a + b;
console.log(add(3)(2));

//------------ Normal Function
// const totalPrice = (amount, discount ) => amount - amount * discount;
//------------ Currying   Function

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3)
console.log(withDiscount(100))
console.log(withDiscount(200))
console.log(withDiscount(300))


