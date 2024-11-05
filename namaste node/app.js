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

const { calculateSum, variable } = require("./xyz")
const data = require("./data.json")

log("data : ", data)
// log("data : ", JSON.stringify(data))

// import { calculateSum } from "./xyz.js"

const ans = calculateSum(2, 3)
log("variable : ", variable)
log("answer : ", ans)