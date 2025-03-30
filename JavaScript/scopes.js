let a =300
var c=300
if(true){
    let a =10
    const b=20
    var c=200
    // console.log("Inner a: " ,a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Suraj"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()
}

one()


if(true){
    const username = "Suraj"
    if(username ==="Suraj"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++ Interesting ++++++++++


console.log(addOne(5));

function addOne(num){
    return num+1
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));