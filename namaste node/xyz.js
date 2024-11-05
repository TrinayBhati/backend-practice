console.log("hello form xyz")
// export function calculateSum(a, b) {
function calculateSum(a, b) {
    const sum = a + b;
    console.log("sum : ", sum)
    return sum;
}
const variable = "waddup";

// module.exports = { calculateSum: calculateSum, variable: variable };
console.log("module exports : ", module.exports)
module.exports = { calculateSum, variable }; // shorthand for above

