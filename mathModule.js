"use strict";
//B. Create a module which should have basics math operations and use them in other files.
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
function multiply(x, y) {
    return x * y;
}
exports.multiply = multiply;
function divide(x, y) {
    return x / y;
}
exports.divide = divide;
function square(x) {
    return x * x;
}
exports.square = square;
