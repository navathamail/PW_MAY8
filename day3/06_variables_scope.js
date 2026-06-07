//var-function scope
//variables declared with var are accessible anywhiere inside the function
//can lead to unepxected behaviour becuase they are not limited to blocks(if, for etc)
//scope-accessible area

//example1: var (function scope)

function test(){
    if(true)
    {
        var msg="Hi";
    }
    console.log(msg);
}
test()

//***************
// 
function test(){
    if(true)
    {
        var msg="Hi";
        console.log(msg);
    }
    console.log(msg);
}
test()

//****************************** */
//let&const-block scope


function test(){
    if(true)
    {
        var let="Hi";
        console.log(msg);//allowerd because let is block scope and realtes to if block here
    }
    console.log(msg);//not allowerd-ReferenceError: msg is not defined
}
test()

//************* scope difference(function vs block scope)-var,let, const

function test(){

    if(true){
        var num1=10;
        let num2=20;
        const num3=30;

        // console.log(num1);
        // console.log(num2);
        // console.log(num3);
    }
    console.log(num1);//works
        console.log(num2);//ReferenceError: num2 is not defined script is stoping here only not going to next step
        console.log(num3);
}
test()



















