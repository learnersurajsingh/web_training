let score = undefined

console.log(typeof score); //Undefined will be the type 

let valueInNumber = Number(score) //Converts the score to number datatype

console.log(typeof valueInNumber); //return number as datatype
console.log(valueInNumber);  //return NaN because score is not a number (undefined)

// "33" => 33
// "33abc" => NaN
// true => 1 false => 0 
// null => 0
// undefined => NaN

let isLogged = 1

let boolLogged =Boolean(isLogged) //converts into boolean datatype
console.log(boolLogged); //returns true as 1==true and 0==false

// ********** Operations ************

let val=3;
let negVal = -val; //converts value to negative
console.log(negVal); //returns negative value   

console.log(2+2); //returns 4
console.log(2-2); //returns 0
console.log(2*2); //return 4
console.log(2**3); //return 8
console.log(2/3); // returns decimal value
console.log(2%3); // returns 2

let str1='hello';
let str2=' suraj';

let str3 = str1 + str2; //stores concatenated string of str1 and str2
console.log(str3); // returns the concatenated string

console.log("1"+2); //returns 12
console.log(1+"2"); //returns 12
console.log("1"+"2"); //returns 12
console.log("1"+2+2); //returns 122
console.log(1+2+"2"); //return 32

console.log(+true); // returns 1
console.log(+""); // returns 0

let num1, num2, num3

num1=num2=num3 =2+2 // assigns 4 in all the 3 variables

console.log(num1); // returns 4

let game = 100;
++game;            // increments game to 101 from 100
console.log(game); // returns 101

let x=100;
let y=x++;      //assigns 100 to y and then increments x
console.log(y); // returns 100
console.log(x); // returns 101

let a=100;
let b=++a;      //first increments a to 101 and then assigns to b
console.log(b); // returns 101
console.log(a); // returns 101

