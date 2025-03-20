// ++++++++++++++++++++ NUMBER +++++++++++++++++

const score = 400  //stores 400 
console.log(score); //return 400

const balance = new Number(200) //stores 200 as a number
console.log(balance); //returns 200 as a object
console.log(balance.toString()); //converts balance to string
console.log(balance.toString().length); // returns 3
console.log(balance.toFixed(2)); // returns 200.00

const otherNum = 123.6875
console.log(otherNum.toPrecision(4)); // returns 123.7

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // returns 10,00,000


// +++++++++++++++++++++++++  MATHS +++++++++++++++++++

console.log(Math); // returns math objects
console.log(Math.abs(-4)); // returns 4
console.log(Math.round(4.6)); // returns 5
console.log(Math.ceil(4.6)); // returns 5
console.log(Math.floor(4.6)); // returns 4
console.log(Math.min(4, 6, 8, 2)); // returns 2

console.log(Math.random()); // returns any random value between 0 and 1
console.log(Math.floor(Math.random()*10) +1); // returns any random integer value between 1 and 10

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min +1)) + min); // returns any random integer value between 10 and 20
