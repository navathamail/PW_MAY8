// var and let reassignment allowed
//const not allowed

//example1: var

var  x=10;
 x=20;   //20 allowed
console.log(x);

//example2: let


let  xscore=10;
 xscore=20;   //20 -allowed
console.log(xscore);

//example:3 const

const x=10;
 x=20;//TypeError: Assignment to constant variable.
console.log(x);


//declaration- at the time of delcaration memory will be declared
//assignemt-value with be given to the memory

var x;//declaration
x=10;//assignment
var x=10;//declaration+assignment