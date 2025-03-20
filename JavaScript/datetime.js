// Dates

let myDate = new Date(); //stores current date and time in some ajeeb format
console.log(myDate); //returns date and time in some ajeeb format
console.log(myDate.toString()); //returns date and time in a well formed format
console.log(myDate.toDateString()); //returns date only in a well formed format
console.log(myDate.toLocaleString()); //returns date and time in numbers format
console.log(typeof myDate); //returns object

let myCreatedDate = new Date(2024, 0, 24) //stores date and time in some ajeeb format
console.log(myCreatedDate); //returns date and time in some ajeeb format
console.log(myCreatedDate.toString()); //returns date and time in a well formed format
console.log(myCreatedDate.toDateString()); //returns date only ini a well formed format

// ++++++++++ TIME ++++++++++++++

let myTimeStamp = Date.now(); //stores current date and time in numbers jo ki bilkul ajeeb  h

console.log(myTimeStamp); // returns date and time in miliseconds
console.log(myCreatedDate.getTime()); // returns time in miliseconds
console.log(Math.floor(Date.now()/1000)); // returns time in seconds
let newDate = new Date(); //stores current date and time in some ajeeb format
console.log(newDate); // returns current date and time in some ajeeb format
console.log(newDate.getMonth()); // returns month number (Starting from Jan=0)
console.log(newDate.getDay()); // returns day number (Starting from Mon=1)

newDate.toLocaleString('default', {
    weekday: "long"
})