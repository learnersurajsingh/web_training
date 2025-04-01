const userEmail = "s@gmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Didn't got the user email");
}

// falsey values 

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//All other values are truthy values

//"0", "false", " ", [], {}, function(){}

const arrayS = []
if(arrayS.length===0){
    console.log("Empty Array");
}

const Obj = {}

if(Object.keys(Obj).length===0){
    console.log("Empty Object");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 12 ?? 15

console.log(val1);

// Ternary operator

// conditon ? true : false 

const iceTea = 100

iceTea>80 ? console.log("More than 80") : console.log("Less than 80")