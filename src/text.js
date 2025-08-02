// const add = (a, b) => a + b;
// console.log(add(2,5))
// console.log(add(2,5))
// console.log(add(2,5))


let total = 0
const addToTotal = (amount) => (total = total + amount)
console.log(addToTotal(4))


const updateDate = () =>{
   return new Date()
}

const reandomNumbers = (amount) =>{
    return  amount + Math.random()
}

console.log(reandomNumbers(3))
console.log(reandomNumbers(3))
console.log(reandomNumbers(3))