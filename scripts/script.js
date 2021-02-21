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

let num1;
let num2;
let result;

function print() {
    document.getElementById("spew").innerHTML = result;
    document.getElementById("spew").style.visibility = "visible";
}

function store() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(`${num1},${num2}`);
}

function add() {
    store();
    result = num1 + num2;
    print();
}

function subtract() {
    store();
    result = num1 - num2;
    print();
}

function multiply() {
    store();
    result = num1 * num2;
    print();
}

function exponent() {
    store();
    result = num1 ** num2;
    print();
}

function divide() {
    store();
    result = num1 / num2;
    print();
}

function mod() {
    store();
    result = num1 % num2;
    print();
}

function divide() {
    store();
    result = num1 / num2;
    print();
}

