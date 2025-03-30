// const tinderUser = new Object() //singleton

const tinderUser = {} //non-singleton

tinderUser.id = "123abs" //adds a key val pair
tinderUser.name = "Suraj" //adds a key val pair
tinderUser.isLoggedIn = false //adds a key val pair

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first: "Suraj",
            last: "Singh"
        }
    }
}  //use of nested objects

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.first);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2, ...obj4}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //tells if isLoggedIn present or not


const user = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"b@gmail.com"
    },
    {
        id:4,
        email:"c@gmail.com"
    }
]  
//nested objects in an array

console.log(user[1].id);
console.log(user[1].email);


// Destructuring 

const course = {
    courseName : "JS",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);


//APIs and JSON

//APIs return values in JSON format like:

// {
//     "name": "Suraj",
//     "coursename": "React",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
//     {},
// ]

