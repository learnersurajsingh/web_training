const user = {
    username: "Suraj",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);   
    }
}

// user.welcomeMessage()
// user.username = "Pranshu"
// user.welcomeMessage()

//this is only used for objects

//+++++++++++++++ Arrow Function +++++++++++++

const chai = () => {
    let username = "Suraj"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username: "Suraj"})

console.log(addTwo(5,7));