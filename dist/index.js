"use strict";
var _a;
let fname = (_a = prompt("Enter your name: ")) !== null && _a !== void 0 ? _a : "";
console.log(`Hello ${fname}`);
function greeet(name) {
    console.log(`Hello ${name}`);
}
greeet(fname);
// type inferencing
function addB(a, b) {
    return a + b;
}
function addA(a, b) {
    return a + b;
}
// function with default parameter 
function delay(anotherfn) {
    setTimeout(anotherfn, 1000);
}
// function that takes another function as an argument
function log() {
    console.log("Hello");
}
// pass the function as an argument
delay(log);
let greeting = () => {
    console.log("Hello");
};
