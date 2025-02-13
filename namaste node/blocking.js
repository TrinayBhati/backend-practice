const crypto = require('node:crypto');
const log = console.log;

log("hello from crypto blocking js")

var a = 107777;
var b = 203889;

// pbkdf2 - password base key derivative function 

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
log("sync function key generated");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    log("password key generated : ", key)
})

function multiply(x, y) {
    const result = a * b;
    return result;
}

var c = multiply(a, b);

log("result form multiply : ", c)