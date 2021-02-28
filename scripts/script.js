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

let num1 = null;
let num2 = null;
let result = null;


// ------------------------------------------------------------------------------------------------

function store() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(`${num1},${num2}`);
    validate();
}

function hide() {
    document.getElementById("spew").style.visibility = "hidden";
    document.getElementById("increment").style.visibility = "hidden";
    document.getElementById("decrement").style.visibility = "hidden";
    document.getElementById("clearBtn").style.visibility = "hidden";
    // Look into query selector for easy class selection
    // Otherwise I need to mess with HTMLCollection array stuff
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
    if (validate() == true) {
        // show the result and hidden elements
        show();
    }
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

// Check for input
function validate() {
    if (num1 && num2) {
        return true;
    }
}


// ------------------------------------------------------------------------------------------------
// The Odin Project js fundamentals Part 1

// let a = 10;
// let b = 7 * a;
// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;

// console.log(23 + 97);

// console.log(5 + 1 + 4 + 94 + 43 + 15);

// console.log((4 + 6 + 9) / 77);

// console.log(a);

// console.log(9 * a);

// console.log(b);

// console.log(`max= ${max}`);

// console.log(`actual= ${actual}`);

// console.log(`actual= ${percentage}`);


// ------------------------------------------------------------------------------------------------
// The Odin Project js fundamentals Part 2

let string = 'Blah blah blah';
console.log(string);

// Examples of string parse errors
// let badString1 = This is a test;
// let badString2 = 'This is a test;
// let badString3 = This is a test';

let badString = string;
console.log(badString);

// ------------------------
// Quotes in quotes
// ------------------------
// Problem: Quote within a string
// let bigmouth = 'I've got no right to take my place...';

// Solution: escape the quotation with a \
let bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// ------------------------
// Concatenating Strings
// ------------------------
let wordOne = 'Hello ';
let wordTwo = 'my ';
let joined = wordOne + wordTwo + 'friend.';
console.log(joined);

// NOTE: When a string is enclosed in quotes, it is known as a 'string literal'

// ------------------------
// Numbers vs. Strings
// ------------------------
let nums = 234;
string = 'nifty';
console.log(nums + string);
console.log(typeof nums);
console.log(typeof string);

// Converting to a number
nums = '2354';
console.log('Before Number() = ' + typeof nums);
nums = Number(nums);
console.log('After Number() = ' + typeof nums);

// Converting to a string
nums = 2354;
console.log('Before toString() = ' + typeof nums);
nums = toString(nums);
console.log('After toString() = ' + typeof nums);
