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

console.log(text);

let x = 0.2 + 0.1;

function myFunction() {
    document.getElementById("spew").innerHTML = text;
    document.getElementById("spew").style.visibility = "visible";
}