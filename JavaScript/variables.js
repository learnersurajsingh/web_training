// Used to store constant values
const accountId = 146551

// Used to store values in block scope
let accountEmail = "suraj.singh@lunarbounds.com"

// Used to store values in global scope
// Var is not used generally because re-declaration is allowed and can cause issues
var accountPassword = "12345"

// not declared variable, but still holds the value
accountCity = "Jaipur"  

let accountState;
// accountId=2   not allowed
accountEmail="ss@ss.com"
accountPassword="1321345"
accountCity="Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);