//for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; 
    console.log(element);
}


//break

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}

//continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}

