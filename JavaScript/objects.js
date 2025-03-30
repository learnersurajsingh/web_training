//singleton
//Object.create    (constructor method)

//Objects literals

const mySym = Symbol("key1")    //creates a Symbol as mySym

const JsUser = {
    name :"suraj",
    "full name": "Suraj Singh",
    [mySym] : "mykey1",
    age : 21,
    location : "Delhi",
    gmail: "suraj.singh@lunarbounds.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.gmail);
console.log(JsUser["gmail"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.age = 22
// Object.freeze(JsUser) //freezes object and doesn't allows to get modified
JsUser.age = 23

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greetingTwo());




