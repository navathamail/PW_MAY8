//value assignment at declaration

//example1(var can be declared wothout assignment)
var x //declaration (value assignment is optional)
//var x=10 //assignment
console.log(x);//undefined-o/p

//example2: let can be declared without assignment
let x; //(value assignment is optional)
console.log(x); //undefined

//example3: const cannot be declared with out assignment/const mustbe assigned at declaration
 //const x;
 const x=100;//we must assign the value to the const variable
 console.log(x);  //o/p-SyntaxError: Missing initializer in const declaration