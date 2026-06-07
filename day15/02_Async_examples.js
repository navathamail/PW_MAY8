/*
synchronous Programming
---------------------
Asynchronous programming allows JavaScript to handle time-consuming tasks without 
blocking the execution of other code.

Async code prevents the application from freezing, which is critical for user experience.

JavaScript is single-threaded language (it can only execute one command at a time), 

Asynchronous = I will do this later, you carry on...

Async code does not run immediately.
*/

//Ex1:

function hello(){
    console.log("Hello")
}

hello() // directly called hello() immediately  - synchronous


function hello(){
    console.log("Hello")
}

setTimeout(hello,6000)

let hello=()=>{
    console.log("Hello")
}

setTimeout(hello,7000) //we passed function name

setTimeout(hello=()=>{
    console.log("Hello")
},6000)  // we passed complete function in setTimeout
//set timeout will automatically execute the function , no need to invoke separately, it will execute after 5 sec


//Ex3:

console.log("one")
console.log("two")

setTimeout(()=>{
    
    console.log("hello")
},6000) //making asynchronus

console.log("three")
console.log("four")

//Ex4: Asynchrounous - API response

/*
When you send  API request, you dont freeze your entire test suite waiting for the response.
The request goes out, your code continues, and when the respose arrives , then the callback runs.
*/ 

console.log("Step1: send a request..")

setTimeout(()=>{
   console.log("Step 2: do processing the request....")
},5000)

console.log("Step3 : continue with th rest of the steps.... ")

