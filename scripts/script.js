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

    let x = 500;             
    let y = new Number(500);

    // (x == y) is true because x and y have equal values


===

    Compares values AND types then spits out a boolean.

    let x = 500;             
    let y = new Number(500);

    // (x === y) is false because x and y have different types


    
!!!DON'T CREATE NUMBER OBJECTS!!!

*/

let num1 = null;
let num2 = null;
let result = null;
let symbol;


// ------------------------------------------------------------------------------------------------

function store() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(`${num1},${num2}`);
    validate();
}

// Check for input
function validate() {
    if (num1 && num2) {
        return true;
    }
}

function hide() {
    document.getElementById("spew").style.visibility = "hidden";
    document.getElementById("increment").style.visibility = "hidden";
    document.getElementById("decrement").style.visibility = "hidden";
    document.getElementById("clearBtn").style.visibility = "hidden";
    document.getElementById("symbol").style.visibility = "hidden";
    // Look into query selector for easy class selection
    // Otherwise I need to mess with HTMLCollection array stuff
}

function show() {
    document.getElementById("spew").style.visibility = "visible";
    document.getElementById("increment").style.visibility = "visible";
    document.getElementById("decrement").style.visibility = "visible";
    document.getElementById("clearBtn").style.visibility = "visible";
    document.getElementById("symbol").style.visibility = "visible";
}

function print() {
    console.log(result);
    document.getElementById("spew").innerHTML = result;
    document.getElementById("symbol").innerHTML = symbol;
    if (validate() === true) {
        // show the result and hidden elements
        show();
    }
}

// ------------------------------------------------------------------------------------------------

function add() {
    symbol = '+';
    store();
    //  unary plus to keep from concatenating strings with addition
    result = +num1 + +num2;
    print();
}

function subtract() {
    symbol = '-';
    store();
    result = num1 - num2;
    print();
}

function multiply() {
    symbol = '*';
    store();
    result = num1 * num2;
    print();
}

function exponent() {
    symbol = '^';
    store();
    result = num1 ** num2;
    print();
}

function divide() {
    symbol = '/';
    store();
    result = num1 / num2;
    print();
}

function mod() {
    symbol = '%';
    store();
    result = num1 % num2;
    print();
}

function divide() {
    symbol = '/';
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

// reset values and hide needless elements
function clearElements() {
    result = 0;
    num1 = 0;
    num2 = 0;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    print();
    hide();
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

// uncomment to run the function below
// strings();

function strings() {
    console.log("\n\n-Strings-");

    let string1, string2, joined;

    string1 = 'Blah blah blah';
    console.log(string1);

    // Examples of string parse errors
    // let badString1 = This is a test;
    // let badString2 = 'This is a test;
    // let badString3 = This is a test';

    string2 = string1;
    console.log(string2);

    // ------------------------
    // Quotes in quotes
    // ------------------------
    // Problem: Quote within a string
    // string1 = 'I've been waiting all day...';

    // Solution: escape the quotation with a \
    string1 = 'I\'ve been waiting all day...';
    console.log(string1);

    // ------------------------
    // Concatenating Strings
    // ------------------------
    string1 = 'Hello ';
    string2 = 'my ';
    joined = string1 + string2 + 'friend.';
    console.log(joined);

    // NOTE: When a string is enclosed in quotes, it is known as a 'string literal'
}

// ------------------------
// Numbers vs. Strings
// ------------------------

// uncomment to run the function below
// numsVsStrings();

function numsVsStrings() {
    console.log("\n\n-Nums VS Strings-");

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
}

// ------------------------
// Template Literals
// ------------------------

// uncomment to run the function below
// templateLiteral();

function templateLiteral() {
    console.log("\n\n--Template Literals--");

    let stringLiteral, templateLiteral;

    stringLiteral = 'Pepper';
    // template literals take into account new lines and spacing from the code
    templateLiteral = `I really like my cat. 
${stringLiteral} is super sweet and fluffy!`;

    console.log(templateLiteral);
}

// placeholder - ${}
// new line character - \n\n

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// String Methods and Properties
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// uncomment to run the function below
// stringMethodsAndProperties();

function stringMethodsAndProperties() {
    console.log("\n\n\n\n--String Methods and Properties--".toUpperCase()); // toUpperCase()

    let txt, length;

    txt = 'asdasdasdasdasdasda';
    console.log(txt);
    length = txt.length; // .length
    console.log(`The above statement is ${length} characters long.`);
}

// --------------------------------------------------
// Finding a string within a string
// --------------------------------------------------

// uncomment to run the function below
// stringWithinAString();

function stringWithinAString() {
    console.log("\n\n--Finding a string within a string--");

    let string, word;

    // ------------------------
    // indexOf('string', starting position);
    // searches going right
    string = `You know what I love? Apples. They're so crunchy and delicious!`;
    console.log(string);
    word = string.indexOf('Apple'); // indexOf()
    console.log(`\The word \"Apple\" found starting at position: ${word}`);

    // ------------------------
    // lastIndexOf('string', starting position);
    // searches going left
    string = `Boy I sure do love apples. 
Apples are my favorite fruit and I don't know what I'd do without them. 
You know what they say 
\"an apple a day keeps the doctor away.\"`;
    console.log(string);
    word = string.lastIndexOf(`apple`); // lastIndexOf()
    console.log(`\The word \"Apple\" last found starting at position: ${word}`);

    // ------------------------
    // search('string');
    // searches going left
    string = `Boy oh boy, today sure is going to be a great day!`;
    console.log(string);
    word = string.search('boy'); // search()
    console.log(`\The word \"boy\" found starting at position: ${word}`);
}

// --------------------------------------------------
// Extracting string parts
// --------------------------------------------------

// uncomment to run the function below
// extractingStringParts();

function extractingStringParts() {
    console.log("\n\n--Extracting string parts--");

    let string, slice, substring, substr;

    // ------------------------
    // slice(start, end);
    // Creates a new string from the specified values
    // Real life example: clipboard feature
    string = "Howdy dowdy water sure is important!";
    console.log(string);

    slice = string.slice(12, 36); // slice()
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
    substring = string.substring(13, 18); // substring()
    console.log(substring);

    // ------------------------
    // substr(start, end);
    // Creates a new string from the specified values
    // NOTE: THE SECOND PARAMETER DENOTES LENGTH OF SLICE, NOT POSITION
    string = `When the moon hits your eye like a big pizza pie, that's amore.`;
    console.log(string);
    substr = string.substr(9, 4);
    console.log(substr);
}

// --------------------------------------------------
// Replacing String Content
// --------------------------------------------------

// uncomment to run the function below
// replacingStringContent();

function replacingStringContent() {
    console.log("\n\n--Replacing String Content--");

    let string, newString;

    // replace(target, replacement);
    // NOTE: CASE SENSITIVE
    // NOTE: RETURNS THE FIRST MATCH
    string = `Blue is my favorite color! Just like the nice, blue, sky!`;
    console.log(string);
    newString = string.replace('blue', 'red'); // replace()
    console.log(newString);

    // To make it case insensitive, use the following regular expression - /i
    newString = string.replace(/blue/i, 'Red');
    console.log(newString);

    // To replace all occurrences, use the following regular expression - /g
    newString = string.replace(/blue/g, 'red');
    console.log(newString);
    // NOTE: Regular expressions can be stacked like terminal commands
}

// --------------------------------------------------
// Converting to Upper or Lower Case
// --------------------------------------------------

// uncomment to run the function below
// convertUpperToLower();

function convertUpperToLower() {
    console.log("\n\n--Converting to Upper or Lower Case--");

    let string, upper, lower;

    string = `Hello my name is Lucas!`;
    console.log(`Original: ${string}`);
    upper = string.toUpperCase(); // toUpperCase()
    console.log(`UpperCase: ${upper}`);
    lower = string.toLowerCase(); // toLowerCase()
    console.log(`LowerCase: ${lower}`);
}

// --------------------------------------------------
// String Concatenation
// --------------------------------------------------

// uncomment to run the function below
// stringConcatenation();

function stringConcatenation() {
    console.log("\n\n--String Concatenation--");

    let text;

    // concat() combines the strings like the + operator
    text = "Hello" + " " + "World!";
    console.log(text);
    text = "Hello".concat(" ", "World", "!"); // concat();
    console.log(text);
}

// --------------------------------------------------
// String Trim
// --------------------------------------------------

// uncomment to run the function below
// stringTrim();

function stringTrim() {
    console.log("\n\n--String Trim--");

    let string, trim;

    // Removes whitespace
    string = `               Hello World                  `;
    console.log(string);
    trim = string.trim();
    console.log(trim);
}

// --------------------------------------------------
// String Padding
// --------------------------------------------------

// uncomment to run the function below
// stringPadding();

function stringPadding() {
    console.log("\n\n--String Padding--");

    let string;

    // Adds to the string
    string = 'Hello';
    console.log(string);
    string = string.padStart(10, '+o'); // padStart(full length, 'string')
    console.log(string);

    string = 'Hello';
    console.log(string);
    string = string.padEnd(10, '+o'); // padEnd(full length, 'string')
    console.log(string);
}

// --------------------------------------------------
// Extracting String Characters
// --------------------------------------------------

// uncomment to run the function below
// extractingStringCharacters();

function extractingStringCharacters() {
    console.log("\n\n--Extracting String Characters--");

    let string, char;
    const POSITION = Math.floor(Math.random() * 10);

    // ------------------------
    // charAt(position)
    // charAt returns the specified position in the string
    string = 'Hello World';
    console.log(string);
    char = string.charAt(POSITION);
    console.log(`Character at position ${POSITION}: "${char}"`);

    // ------------------------
    // charCodeAt(position)
    // charAt returns the unicode of the specified position in the string
    string = 'Hello World';
    console.log(string);
    char = string.charCodeAt(POSITION);
    console.log(char);

    // ------------------------
    // Property Access
    // charAt returns the specified position in the string
    // NOTE: Strings are still not arrays!!!
    string = 'Hello World';
    console.log(string);
    char = string[POSITION];
    console.log(char);
    // NOTE: This method is read only and cannot edit the actual string
}

// --------------------------------------------------
// Converting a String to an Array
// --------------------------------------------------

// uncomment to run the function below
// stringToArray();

function stringToArray() {
    console.log("\n\n--Converting a String to an Array--");

    let string;

    string = 'My cat has a massive amount of floof';
    console.log(string);
    string.split(" "); // split()

    for (let i = 0; i < string.length; i++) {
        console.log(`[${i}] ${string[i]}`);
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// If Else Statements
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// uncomment to run the function below
// ifElseStatements();

function ifElseStatements() {
    console.log("\n\n--If Else Statements--");

    let date = new Date();
    let timePeriod;


    if (date.getHours() >= 12) {
        timePeriod = 'PM'
    }
    else {
        timePeriod = 'AM';
    }

    console.log(`Current time is ${date.getHours()}:${date.getMinutes()} ${timePeriod}`);
}

// --------------------------------------------------
// Switch
// --------------------------------------------------

// uncomment to run the function below
// switchStatement();

function switchStatement() {
    console.log("\n\n-Switch-");

    let expression = +prompt('1 or 2?');

    switch (expression) {
        case 1:
            console.log('You typed 1');
            break;
        case 2:
            console.log('You typed 2');
            break;
        // include as many cases as you like
        default:
            console.log('You didn\'t type either option :(');
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Logical Operators
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// uncomment to run the function below
// logicalOperators();

function logicalOperators() {
    console.log("\n\n++Logical Operators++");

    a = 5;
    b = -2;
    c = 87;

    // orOperator();
    // andOperator();
    // notOperator();
    // ternaryOperator();

    // --------------------------------------------------
    // OR ||
    // --------------------------------------------------

    function orOperator() {
        console.log("\n\n-OR - ||-");

        if (a < 6 || b >= 2) {
            console.log('howdy do');
            // result ends up being true || false
            // since there's at least one condition true, it returns the log
        }

        console.log(true || true);
        console.log(false || true);

        // true = 1
        // false = 0
        console.log(true || false);
        console.log(1 || 0);

        console.log(false || false);

        result = 0 || null || 1;
        console.log(`First truthy: ${result}`);
        // in the above example, it will return the first TRUTHY variable going left to right
        // if none are found, it will return the final variable in the chain

        // For example:
        console.log(null || 0 || 1); // 1 is returned because 1 = true

        let firstName = "";
        let lastName = "";
        let nickName = "SuperCoder";

        console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
        // If all fields above are empty, it defaults to "Anonymous"

        true || console.log("not printed");
        false || console.log("printed");
    }

    // --------------------------------------------------
    // AND &&
    // --------------------------------------------------

    function andOperator() {
        console.log("\n\n-AND - &&-");

        result = a && b;
        console.log(result); // b = -2

        // returns false if ANY are false
        console.log(true && true);   // true
        console.log(false && true);  // false
        console.log(true && false);  // false
        console.log(false && false); // false

        result = 0 && null && 1;
        console.log(`First falsy: ${result}`);
        // in the above example, it will return the first FALSY variable going left to right

        // && takes higher precedence than ||
        console.log(0 || 1 && null); // null
        // 0 || 1 && null
        // 0 || (1 && null)
        // 0 || (true && null)
        // null

        console.log(null || 2 && 3 || 4); // 3, furthest right
    }

    // --------------------------------------------------
    // NOT !
    // --------------------------------------------------

    function notOperator() {
        console.log("\n\n-NOT - !-");

        // Converts to boolean then flips the boolean value

        console.log(5);
        console.log(!5); // false
        // !! is sometimes used to convert a value to boolean while maintaining the same value
        console.log(!!5); // true
    }

    // --------------------------------------------------
    // Ternary Operator ?:
    // --------------------------------------------------

    function ternaryOperator() {
        console.log("\n\n-Ternary - ?:-");

        // ( condition ) ? run this code : run this code instead
        // (true) ? This is run : This is NOT run
        // (false) ? This is NOT run : This is run

        // Example:
        // let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';

        let test = Math.floor(Math.random() * 2); // Randomly pick 1 or 0, a truthy or falsy number
        string = (test) ? 'This is true' : 'This is false';

        console.log(string);

        let age = Math.floor(Math.random() * 150);
        let message = (age < 4) ? 'Hello baby' :
            (age < 18) ? 'Someday, kid' :
                (age < 100) ? 'Welcome to adulthood!' :
                    'Are you a transcendant being??';

        console.log(message);

        // Here's the same function utilizing if else instead of ?
        if (age < 4) {
            message = 'Hello baby';
        }
        else if (age < 18) {
            message = 'Someday, kid';
        } else if (age < 100) {
            message = 'Welcome to adulthood!';
        } else {
            message = 'Are you a transcendant being??';
        }

        console.log(message);
    }
}

// --------------------------------------------------
// Operator Practice
// --------------------------------------------------

// uncomment to run the practice
// operatorPractice();

function operatorPractice() {
    console.log("\n\n-Operator Practice-");

    let age = 13;


    if (age >= 14 && age <= 90) {
        console.log('Within range!');
    }

    // with NOT
    if (!(age >= 14) || age >= 90) {
        console.log('Outside range!');
    }

    // without NOT
    if (age <= 14 || age >= 90) {
        console.log('Outside range!');
    }

    if (-1 || 0) console.log('first'); // -1 is returned as true. If statement does execute
    if (-1 && 0) console.log('second'); // 0 is returned as false. If statement does NOT execute
    if (null || -1 && 1) console.log('third'); // -1 && 1 is returned as true. If statement does execute
}

// --------------------------------------------------
// Check the Login Practice
// --------------------------------------------------

// uncomment to run the practice
// loginPractice();

function loginPractice() {
    console.log("\n\n-Check the Login Practice-");

    let username, password;

    username = prompt('Who\'s there?');

    if (username == 'Admin') {
        password = prompt('Password:');
        if (password == 'TheMaster') {
            alert('Welcome!');
        }
        else if (password == '' || password == null) {
            alert('Canceled');
        }
        else {
            alert('I don\'t know you');
        }
    }
    else if (username == '' || username == null) {
        alert('Canceled');
    }
    else {
        alert('I don\'t know you');
    }
}

// --------------------------------------------------
// Show the Sign Practice
// --------------------------------------------------

// uncomment to run the practice
// showTheSignPractice();

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

// In this task we assume that the input is always a number.

function showTheSignPractice() {

    let num = prompt('Please enter a whole number:');

    if (num > 0) {
        alert(1);
    }
    else if (num < 0) {
        alert(-1);
    }
    else {
        alert(0);
    }
}

// --------------------------------------------------
// If Ternary Practice
// --------------------------------------------------

// uncomment to run the practice
// ifTernaryPractice();

function ifTernaryPractice() {
    console.log("\n\n-If Ternary Practice-");

    let result;
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);

    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('sum = ' + (a + b));

    // "if" statement version
    if (a + b < 5) {
        result = 'Below';
    } else {
        result = 'Over';
    }
    console.log(result);

    // "ternary" statement version
    result = (a + b < 5) ? 'Below' : "Over";
    console.log(result);

}

// --------------------------------------------------
// If Else Ternary Practice
// --------------------------------------------------

// uncomment to run the practice
// ifElseTernaryPractice();

function ifElseTernaryPractice() {
    console.log("\n\n-If Else Ternary Practice-");

    let login = prompt('Username:');
    let message;

    // "if...else" statement version

    /*
    if (login == 'Employee') {
        message = 'Hello';
    } else if (login == 'Director') {
        message = 'Greetings';
    } else if (login == '') {
        message = 'No login';
    } else {
        message = '';
    }
 
    alert(message);
    */


    // "ternary" statement version
    message = (login == 'Employee') ? 'Hello' :
        (login == 'Director') ? 'Greetings' :
            (login == '') ? 'No login' :
                '';

    alert(message);

}

// --------------------------------------------------
// Best Practice Principles
// --------------------------------------------------

// uncomment to run the practice
// bestPracticePrinciples();

function bestPracticePrinciples() {

    console.log("\n\n-Best Practice Principles-");

    // If else statements can be shortened with line breaks and without curly braces.
    // This is efficient, but less clear and should be avoided to allow better readability in the future

    // Only use ternary operator for single conditional statements. Like true/false
    // Otherwise use if else
    // And if there a LOT of outcomes, use a switch statement

    // Falsy Values
    // 0, empty string "", null, undefined, and NaN will all convert to false
    console.log(`0 = ${!!0}`);
    console.log(`"" = ${!!''}`);
    console.log(`null = ${!!null}`);
    console.log(`undefined = ${!!undefined}`);
    console.log(`NaN = ${!!NaN}`);

    // Truthy Values
    console.log(`\n5 = ${!!5}`);
    console.log(`'John' = ${!!'john'}`);

}