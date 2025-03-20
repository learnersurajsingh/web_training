//Arrays

const myArr =[0, 1, 2, 3, 4, true, "Suraj"]
const myHeroes =["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.unshift(8)
console.log(myArr);
myArr.pop()
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(11));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice
console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr);

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

marvel.push(dc)
console.log(marvel);
console.log(marvel[3][1]);

const all = marvel.concat(dc)
console.log(all);

const all_new = [...marvel, ...dc]
console.log(all_new);

const another = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const real = another.flat(Infinity)
console.log(real);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj"));
console.log(Array.from({name : "suraj"})); //important and interesting

let s1 = 100;
let s2 = 200;
let s3 = 300

console.log(Array.of(s1,s2,s3));






