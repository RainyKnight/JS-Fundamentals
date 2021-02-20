/*

NOTES

let - declare variables
var = declare variables (deprecated)
const - declare static constants

Capitalize Constants
For example:
    const POMEGRANATE_RED = #660c21;

==
    Compares values then spits out a boolean.

    var x = 500;             
    var y = new Number(500);

    // (x == y) is true because x and y have equal values



===

    Compares values AND types then spits out a boolean.

    var x = 500;             
    var y = new Number(500);

    // (x === y) is false because x and y have different types


    
!!!DON'T CREATE NUMBER OBJECTS!!!

*/

let text = "Hello World";

// addition
let a = 5 + 7;
console.log(a);

// subtraction
let b = 5 - 7;
console.log(b);

// multiplication
let c = 5 * 7;
console.log(c);

// exponentiation
let d = 5 ** 7;
console.log(d);

// division
let e = 5 / 7;
console.log(e);

// modulation
let f = 5 % 7;
console.log(f);

// increment
f++;
console.log(f);

// decrement
f--;
console.log(f);

console.log(text);


function myFunction() {
    document.getElementById("spew").innerHTML = text;
    document.getElementById("spew").style.visibility = "visible";
}