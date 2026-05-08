"use strict";
// basic function with types
function add(a, b) {
    return a + b;
}
// optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
// default parameters
function multiply(a, b = 1) {
    return a * b;
}
// rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// arrow function with types
// Arrow functions
const divide = (a, b) => a / b;
// Function types
let calculate;
calculate = add;
//# sourceMappingURL=04-functions.js.map