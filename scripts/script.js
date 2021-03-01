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
let stringLiteral = 'nifty';
console.log(nums + stringLiteral);
console.log(typeof nums);
console.log(typeof stringLiteral);

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

// ------------------------
// Template Literals
// ------------------------
let catName = 'Honey';
let templateLiteral = `I really like my cat. 
${catName} is super sweet and fluffy!`;
console.log(templateLiteral);

// placeholder - ${}
// new line character - \n

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// String Methods and Properties
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// .length
let txt = 'asdasdasdasdasdasda';
console.log(txt);
let length = txt.length;
console.log(`The above statement is ${length} characters long.`);

// --------------------------------------------------
// Finding a string within a string
// --------------------------------------------------

// ------------------------
// indexOf('string', starting position);
// searches going right
string = `You know what I love? Apples. They're so crunchy and delicious!`;
console.log(string);
let word = string.indexOf('Apple');
console.log(`\The word \"Apple\" found starting at position: ${word}`);

// ------------------------
// lastIndexOf('string', starting position);
// searches going left
string = `Boy I sure do love apples. 
Apples are my favorite fruit and I don't know what I'd do without them. 
You know what they say 
\"an apple a day keeps the doctor away.\"`;
console.log(string);
word = string.lastIndexOf(`apple`);
console.log(`\The word \"Apple\" last found starting at position: ${word}`);

// ------------------------
// search('string');
// searches going left
string = `Boy oh boy, today sure is going to be a great day!`;
console.log(string);
word = string.search('boy');
console.log(`\The word \"boy\" found starting at position: ${word}`);

// --------------------------------------------------
// Extracting string parts
// --------------------------------------------------

// ------------------------
// slice(start, end);
// Creates a new string from the specified values
// Real life example: clipboard feature
string = "Howdy dowdy water sure is important!";
console.log(string);

let slice = string.slice(12, 36);
console.log(slice);

// positive values count spaces from the left
slice = string.slice(12);
console.log(slice);

// negative values count spaces from the right
slice = string.slice(-24);
console.log(slice);

// ------------------------
// substring(start, end);
// Creates a new string from the specified values
// NOTE: CANNOT ACCEPT NEGATIVE VALUES
string = "Holy cannoli kiwis sure are hairy!";
console.log(string);
let subString = string.substring(13, 18);
console.log(subString);

// ------------------------
// substr(start, end);
// Creates a new string from the specified values
// NOTE: THE SECOND PARAMETER DENOTES LENGTH OF SLICE, NOT POSITION
string = `When the moon hits your eye like a big pizza pie, that's amore.`;
console.log(string);
let substr = string.substr(9, 4);
console.log(substr);

// --------------------------------------------------
// Replacing String Content
// --------------------------------------------------

// replace(target, replacement);
// NOTE: CASE SENSITIVE
// NOTE: RETURNS THE FIRST MATCH
string = `Blue is my favorite color! Just like the nice, blue, sky!`;
console.log(string);
let newString = string.replace('blue', 'red');
console.log(newString);

// To make it case insensitive, use the following regular expression - /i
newString = string.replace(/blue/i, 'Red');
console.log(newString);

// To replace all occurrences, use the following regular expression - /g
newString = string.replace(/blue/g, 'red');
console.log(newString);
// NOTE: Regular expressions can be stacked like terminal commands

// --------------------------------------------------
// Converting to Upper or Lower Case
// --------------------------------------------------

// toUpperCase() or toLowerCase()
string = `Hello my name is Lucas!`;
console.log(`Original: ${string}`);
let upper = string.toUpperCase();
console.log(`UpperCase: ${upper}`);
let lower = string.toLowerCase();
console.log(`LowerCase: ${lower}`);

// --------------------------------------------------
// String Concatenation
// --------------------------------------------------

// concat() combines the strings like the + operator
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");