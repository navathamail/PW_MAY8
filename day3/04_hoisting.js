//hoisting
//Accessing the varaible before declaration or before declaration accessing the variables

//example1:
console.log(a); //when i execute only 5 we are getting ReferenceError: a is not defined
var a;//(5&6 called hoisting) means accessing before declaration // undefined

var a;
console.log(a);//undefined

//exaple2: let-hoisting not allowed
console.log(a);
let a; //ReferenceError: Cannot access 'a' before initialization

//example3:const-hoisting not allowed

console.log(a);
const a=100;//ReferenceError: Cannot access 'a' before initialization
//const a; //SyntaxError: Missing initializer in const declaration