const name = "suraj"  //string
const repoCount = 50  //number

console.log(name + repoCount + " Value");  //old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //new method

const gameName = new String('suraj-ss-com')

console.log(gameName[0]); // returns s
console.log(gameName.__proto__); //used to check object


console.log(gameName.length); // returns 12
console.log(gameName.toUpperCase()); // converts in uppercase (doesn't change original value)
console.log(gameName.charAt(2)); // returns r
console.log(gameName.indexOf('r')); // returns 2

const newString = gameName.substring(0, 4) //stores sura
console.log(newString); //returns sura

const anotherString = gameName.slice(-8, 4) //stores values from last
console.log(anotherString);

const newStringOne = "   suraj    "
console.log(newStringOne); 
console.log(newStringOne.trim()); //removes spaces

const url = "https://suraj.com/suraj%20singh"

console.log(url.replace('%20', '-')) //replaces %20 with -

console.log(url.includes('sundar')) //returns false

console.log(gameName.split('-')); //returns an array of strings 