//========================================================================================
// #3

const log = console.log;
// log("hi")
// log('global object : ', global)
// log("this : ", this)
// log("global This : ", globalThis)
// log("global equal to globalThis : ", global === globalThis)

//==========================================================================================
// #4

// const { calculateSum, variable } = require("./xyz")
// const data = require("./data.json")

// log("data : ", data)
// log("data : ", JSON.stringify(data))

// import { calculateSum } from "./xyz.js"

// const ans = calculateSum(2, 3)
// log("variable : ", variable)
// log("answer : ", ans)
// log(__filename)

//===========================================================================================
//#9

const fs = require("fs");
const a = 10;

setImmediate(() => log("setimmideate print"));

fs.readFile("./checkout-later.txt", "utf8", () => {
    log("file reading done")
});

setTimeout(() => {
    log("set timeout print")
}, 0);

function print() {
log("print a : ", a)
}

print();

log("end");