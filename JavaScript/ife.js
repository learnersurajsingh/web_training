// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log("DB connected");
})();

( (user) => {
    console.log(`DB connected 2.0 by ${user}`);
})('Suraj')
// chai()


