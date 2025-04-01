//if

const temp =41
if(temp<50){
    console.log("Less than 50");
}
else{
    console.log("Greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !== 

const score = 200

if(score>100){
    const power = "fly"
    console.log(`User power : ${power}`);
}

// console.log(`User power : ${power}`); // throws error

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

