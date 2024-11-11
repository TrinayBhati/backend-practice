const log = console.log;

log("hello from set timeout zero");

var a = 107777;
var b = 203889;

setTimeout(() => {
    log("call me right now right here")
}, 0);

setTimeout(() => {
    log("call me in 3 seconds")
}, 3000);

function multiply(x, y) {
    const result = a * b;
    return result;
}

var c = multiply(a, b);

log("result form multiply : ", c)