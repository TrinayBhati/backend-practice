// code 1 ===============================================================================================================================
const log = console.log;
const fs = require("fs");
const a = 10;

// setImmediate(() => log("setimmideate print"));

// fs.readFile("./checkout-later.txt", "utf8", () => {
//     log("file reading done")
// });

// setTimeout(() => {
//     log("set timeout print")
// }, 0);

// function print() {
//     log("print a : ", a)
// }

// print();
// log("end");

// sequence would be
// print a : 10 - synchronous task
// end - another synchronous task - now js engine would take callbacks from libuv - as soon as call stack is empty
// set timeout print - timers are first in libuv
// setImideate print - in check phase - checks if any setImmidieate is waiting and executes it
// file reading done - file read operation was happening in background

// code 2 ===============================================================================================================================

// setImmediate(() => log("setImmediate print"))
// Promise.resolve("Promise").then(console.log)

// fs.readFile("./checkout-later.txt", "utf8", () => {
//     log("file read")
// })

// setTimeout(() => console.log("timer printed"), 0);

// process.nextTick(() => log("process next tick print"))

// function print() {
// console.log("answer a : ", a)
// }

// print();
// console.log("end of the line")

// sequence would be
// answer a : 10
// end of the line
// process next tick print
// promise resolved
// timer printed
// setImmideate print
// file read

// code 3 ===============================================================================================================================

// setImmediate(() => log("setImmediate print"))

// setTimeout(() => {
//     log("timer printed")
// }, 0);

// Promise.resolve("Promise").then(console.log)
// Promise.resolve("Promise").then(console.log("promise resolved"))
// check difference in these above two promise syntax - in 2nd one, console.log is executed immediately

// fs.readFile("./checkout-later.txt", "utf8", () => {

//     setTimeout(() => {
//         log("2nd timer printed")
//     }, 0);

//     process.nextTick(() => log("process next tick printed"))

//     setImmediate(() => log("2nd setImmediate printed"))

//     log("file read")
// })

// process.nextTick(() => log("process next tick print outside"))

// log("end of the line")

// end of the line
// process next tick print outside
// promise resolved
// timer printed
// setImmediate print
// file read
// process next tick printed
// 2nd setImmediate printed
// 2nd timer printed

// code 4 ===============================================================================================================================

setImmediate(() => log("setImmediate print"))

setTimeout(() => {
    log("timer printed")
}, 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./checkout-later.txt", "utf8", () => {
    log("file read done")
})

process.nextTick(() => {
    process.nextTick(() => log("next tick inside next tick"))
    log("process next tick print")
})

log("end of the line")

// end of the line
// process next tick print
// next tick inside next tick
// Promise
// timer printed
// setImmediate print
// file read done