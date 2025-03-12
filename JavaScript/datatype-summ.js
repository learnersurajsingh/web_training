//  Primitive  (Stack me store hota h, copy use hoti h value change ya copy krne k liye)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null(object)
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol

console.log(id === anotherId); //returns false

const bigNumber = 3456543576654356754n //bigint



// Reference (Non primitive)  (Heap use hota hai... Direct reference diya jata h)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Arrays
let myObj = {                           
    name: "hitesh",                         //Objects
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");             //Function
}

console.log(typeof anotherId);     //returns Symbol


//++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-primitive)