const accountId = 144553
let accountEmail = "suraj.singh@lunarbounds.com"
var accountPassword = "12345"
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