//Arrays

const myArr =[0, 1, 2, 3, 4, true, "Suraj"] //stores array having values of different datatypes
const myHeroes =["shaktimaan", "naagraj"] //stores array of strings

const myArr2 = new Array(1, 2, 3, 4) //another method to create arrays
console.log(myArr[0]); //returns first value of the array

// Array Methods

myArr.push(6) //pushes 6 to the end of the array
myArr.push(7) //pushes 7 to the end of the array
myArr.unshift(8) //pushes 8 to the start of the array
console.log(myArr); //returns array
myArr.pop() //pops out the last value of the array
myArr.shift() //pops out the first value of the array
console.log(myArr); //returns array
console.log(myArr.includes(9)); //checks if array has 9 or not
console.log(myArr.indexOf(3)); //returns index of the value 3
console.log(myArr.indexOf(11)); //returns -1 because 11 doesn't exist in array

const newArr = myArr.join(); //converts array values into string and stores it in newArr
console.log(myArr); //returns array
console.log(newArr); //returns string of the array
console.log(typeof newArr); //returns datatype of newArr (String)

//Slice and Splice
console.log("A" , myArr); // returns myArr starting with A

const myn1 = myArr.slice(1,3) //stores the value of array from index 1 to 2
console.log(myn1); //returns myn1 array
console.log("B" , myArr); //returns myArr starting with B

const myn2 = myArr.splice(1,3) //stores the value of array from index 1 to 3
console.log(myn2); //returns myn2 array
console.log("C" , myArr); //returns myArr starting with C but after deleting values from index 1 to 3

const marvel = ["thor", "ironman", "spiderman"] //stores strings in an array
const dc = ["superman", "batman", "flash"] //stores strings in an array

marvel.push(dc) //pushes the full array dc at the end of the array marvel but as a single element
console.log(marvel); //returns updated marvel array
console.log(marvel[3][1]); //returns the second element of the dc array which was stored in the marvel array

const all = marvel.concat(dc) //pushes all the elements of dc individually in marvel array
console.log(all); //returns the all array

const all_new = [...marvel, ...dc] //creates a new array and stores th elements of marvel and dc individually
console.log(all_new); //returns all_new array

const another = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]] //stores nested arrays
const real = another.flat(Infinity) //removes the nesting of arrays and stores in real array
console.log(real); //returns real array

console.log(Array.isArray("Suraj")); //checks if the given parameter is an array or not
console.log(Array.from("Suraj")); //creates an array from the word Suraj and stores each character individually
console.log(Array.from({name : "suraj"})); //important and interesting //creates an empty array

let s1 = 100;
let s2 = 200;
let s3 = 300

console.log(Array.of(s1,s2,s3)); //creates an array having elements s1,s2 and s3






