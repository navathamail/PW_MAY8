/*** Redeclaration */

//var-allows the  re declaration
//let & Const - doesnt

//ex1:var allows the  re declaration
var city = "hyd"
var city = "delhi"//re declaration-which can lead to accidental over writing
console.log(city);

//example 2: let (not allowed redeclaration)

let city="hyd";
//let city="delhi"
console.log(city);//SyntaxError: Identifier 'city' has already been declared

//example3: Const

const city="hyd";
//const city="delhi";//SyntaxError: Identifier 'city' has already been declared
console.log(city);


let a = 100; 
let a = 200; 
console.log(a); 