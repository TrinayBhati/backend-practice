const fs = require("fs");
const https = require("https");

const log = console.log;

log("Hello for async js");

var a = 107777;
var b = 203889;

https.get("https://dummyjson.com/products/1", (res) => {
    log("dummy json fetched successfully : ");
})

setTimeout(() => {
    log("set timeout ran after 5 seconds")
}, 5000)

fs.readFileSync("./checkout-later.txt", "utf8")
log("file read after sync fs")

fs.readFile("./checkout-later.txt", "utf8", (err, data) => {
    log("data form notes.txt : ");
})

function multiply(x, y) {
    const result = a * b;
    return result;
}

var c = multiply(a, b);

log("result form multiply : ", c)