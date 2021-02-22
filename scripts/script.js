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
let result = null;


// ------------------------------------------------------------------------------------------------

function store() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(`${num1},${num2}`);
}

function hide() {
    document.getElementById("spew").style.visibility = "hidden";
    document.getElementById("increment").style.visibility = "hidden";
    document.getElementById("decrement").style.visibility = "hidden";
    document.getElementById("clearBtn").style.visibility = "hidden";
}

function show() {
    document.getElementById("spew").style.visibility = "visible";
    document.getElementById("increment").style.visibility = "visible";
    document.getElementById("decrement").style.visibility = "visible";
    document.getElementById("clearBtn").style.visibility = "visible";
}

function print() {
    console.log(result);
    document.getElementById("spew").innerHTML = result;

    // show the result and hidden elements
    show();
}

// ------------------------------------------------------------------------------------------------

function add() {
    store();
    //  unary plus to keep from concatenating strings with addition
    result = +num1 + +num2;
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



function increment() {
    result++;
    print();
}

function decrement() {
    result--;
    print();
}



function clearElements() {
    result = 0;
    num1 = 0;
    num2 = 0;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    print();
    hide();
}