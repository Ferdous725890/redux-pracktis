// mutation
const employess = {
  name: "Mir",
  address: { country: "Bangladesh", city: "Dhaka" },
};

const emplyess2 = {
  ...employess,
  name: "Ferdosu",
  address : {
    ...employess.address,
    country : "USA",
    city : "Tetulia"
  }
};
employess.address.city = "Panchagarh";

console.log(employess == emplyess2);

console.log(employess);
console.log(emplyess2);
