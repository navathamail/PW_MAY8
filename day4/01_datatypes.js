/*
JavaScript supports the following data types:

1. Number
2. BigInt (Introduced in ES2020)
3. Boolean
4. String
5. Object
6. null
7. Undefined
*/


/*
Number Systems (Ways to represent numbers):

1. Decimal (Base 10)  → 0–9
2. Octal (Base 8)     → 0–7
3. Binary (Base 2)    → 0–1
4. Hexadecimal (Base 16) → 0–9, A–F

*/




//1.Number
//used to represent both integers floating points(decimal ) numbers
let positiveNumber=45; //positive integer
let zeroValue=0; //zero
let negativeNumber=-7//negative number

let discountRate =3.14
console.log(discountRate);

//Even though written as 200.00, java script treats it as 200(integer)

let priceValue=200.00
console.log(priceValue);
//normally we follow decimal number sysytem(0to9)

//different number formats
let hexNumber = 0xFF;//equals to 255 in decimal number system
console.log(hexNumber);

let biNumber = 1010; //1010
console.log(biNumber);

let biNumber =0b1010; //10
console.log(biNumber);

let number=10;
console.log(typeof number);

//range number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// we will go big int if we exceed above levels
//in Js only 16 digits is allowed after decimal number

// Precision limitation in Number type
let bigdecimalNumber=12.7654565434567878  // uptp 15 digits accepted after decimal. 
console.log(bigdecimalNumber) //12.765456543456787  last digit 8 is truncated

// 2. BigInt (Introduced in ES2020)
// Used to represent very large integers beyond Number limit. suffix 'n' should be added
//n represents the bigint

let x=90071992547409998989
console.log(typeof x) //bigint

let x=90071992547409998989n //(n is the suffix here)
console.log(typeof x) //bigint

//let y=12.765456543456787889n  //Invalid.  A bigint literal must be an integer.

//3.boolean -represents tru or false
let status=true;
let hasPermission=false;

console.log(typeof status);
console.log(hasPermission);

// 4. String
// Used to represent text

//double quotes
let doubletext="Welcome"
console.log(doubletext)

//single quotes
let singletext='Welcome'
console.log(singletext)

// He said "Hi"

//let greet="He said "Hi""; // invalid
//let greet='He said 'Hi''; // invalid

let greet="He said 'Hi'";  // valid
console.log(greet)

greet='He said "Hi"';  // valid
console.log(greet)

//Backtick

let sentence=`hi
welcome
to
JS`

console.log(sentence);
let sentence=`Hi welcome to javascript class` 
console.log(sentence)

//backtick also used to represent template literals

// Template Literal
// expected : Hi, Pavan Kumar
let first_name="Pavan"
let full_name=`Hi ${first_name} Kumar`
console.log(full_name)

//Template literals in JavaScript are strings enclosed with backticks ` ` instead of single ' ' or double " " quotes.
const name = "Alex";

console.log(`Hello ${name}`);

// expected: 2+2=4

let num1=2
let num2=2
let res=num1+num2
console.log(res)
console.log("2+2=",res)

//console.log(`${num1}+${num2}=`,res) //valid
console.log(`${num1}+${num2}= ${res}`) //valid

//storing file path in a variable
//let path="C:\Automation"//invalid-in js simgle backslash dont have meaning

console.log(path);//C:Automation --removed backslashes

//let path='C:\Automation\myworkspace\file.txt'  // Invalid
//console.log(path) 

//Correct way
//let path="C:\\Automation\\myworkspace\\file.txt"  // valid
let path='C:\\Automation\\myworkspace\\file.txt'  // valid
console.log(path)

// store URL 
let url="https://www.opencart.com/index.php"
console.log(url) //https://www.opencart.com/index.php

/*
Note:
'//' → Used in URLs (forward slashes)
'\\' → Used in file paths (escape backslash)
*/

//Object
// A collection of key-value pairs//multiple values stored in to a variable
// //if we say certain things as an oject it shoud have some properties

let employee={ 
    name:"John",
    age:35,
    salary:508000
}

console.log(employee.name);
console.log(typeof employee) //object 
console.log(employee)
console.log(employee.name) // John


// null
// We explicitly assign null when we want to say "no value"
//let selectedUser = 100;
selectedUser = null;
console.log("Null value:", selectedUser); 
console.log(typeof selectedUser); //object //this is a known JavaScript quirk

// 2. undefined → "not yet assigned"
// Variable declared but no value assigned

let myname;
console.log(myname) //undefined

let user={age:30}
console.log(user.name) //undefined

function greet(name,age)
{
    console.log(age)
}

greet("john") //undefined// based on order only it will print correct o/p,
//  suppise if u give 10 also it will print undefined

let colors=["red","green","blue"]//array
console.log(colors[5]) //undefined
