
/*Asynchronous Programming in JS
-----------------------------

Synchronous
Asynchronous


Synchronous Programming
--------------
JavaScript executes code line by line, in a top-to-bottom manner. 
Each statement must complete before the next one starts. This is called blocking execution. 

Example Flow: 
Step 1 → Step 2 → Step 3 
If one step takes time, the entire program waits.


*/


//Ex1: normal statments - Synchronous

console.log("a")
console.log("b")
console.log("c")
console.log("d")

//Ex2: functions also will be executed in Synchronous mode
//JavaScript functions are executed in the sequence they are called. 
// Not in the sequence they are defined.

function myFirst() {
 console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}


mySecond()
myFirst()