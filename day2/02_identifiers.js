// create a variable
let x=20
x=10
console.log(x);//10

const x="forty";
x=20;
console.log(x);//error bcoz value already assigne to x which is fixed

// Rule of Identifier:
// 1. Must start with a letter, underscore, or dollar sign
// 2. Can contain letters, numbers, underscores, and dollar signs
// 3. Cannot start with a number
// 4. Cannot be a reserved keyword
// 5. Cannot contain spaces
// 6. Cannot contain special characters other than underscore and dollar sign
// 7. Case sensitive


// 1. Must start with a letter, underscore, or dollar sign

let firstName="Pavan"  // Start with letter
let _count=10  // Start with underscore

//let 1name="kumar"  // Invalid , should not start with number
//let @price=100;  // Invalid , shoudl not start with special character except underscore, or dollar sign


// 2. Can contain letters, numbers, underscores, and dollar signs
let user1_name$ = "John";

//*******************************
// 1. camelCase (standard for JS variables and functions)

let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

console.log("camelCase:", userName, totalPrice, isLoggedIn);

// 2. PascalCase (standard for JS classes and constructors)

let UserProfile = "PascalCase";
let ShoppingCart = "class name style";

console.log("PascalCase:", UserProfile, ShoppingCart);

// 3. snake_case (underscore separated)
let user_name = 'snake_case';
let total_price = 49.99;
let is_logged_in = false;

console.log("snake_case:", user_name, total_price, is_logged_in);

// 4. SCREAMING_SNAKE_CASE (constants)

const MAX_SIZE=100
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY, DATABASE_URL);


// 5. Hungarian Notation (prefix with type - older style)

let strName="pavan"
let nCount=100
let bActive=true;
console.log("Hungarian Notation:", strName, bActive, nCount)
