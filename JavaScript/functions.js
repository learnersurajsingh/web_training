function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

function add(num1, num2){
    // let result = num1 +num2
    // return result
    return num1+num2
}

const result = add(3,4)
console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Suraj"));


function calculatePrice(val1, ...num1){
    return num1
}

console.log(calculatePrice(200,400,100));

const user = {
    username: "Suraj",
    price: 999
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObj(user)

const myNewArr = [200, 400, 100, 600]

function returnSecondVal(getArr){
    return getArr[1]
}

console.log(returnSecondVal(myNewArr));