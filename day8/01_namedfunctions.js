function groceries(...groc){
    
    for(i=0;i<groc.length;i++)
        {
            
        console.log(groc[i]);
        
    }
    return groc.length

}
console.log(groceries("Dal","salt","oil"))

/*************Named function*/
// function functionName(parameter){//function initialisation

// }
// functionName(); //calling the function

//Example1 named function without parameter and no return type

//before declaration the function we are calling the function which is called hoisting in JS, 
// Hoisting is applicable for functions concept
//we create the functions in one file and we call them in another file, thats y hoisting is imp in Functions
display();
function display() //function declaration
{
    console.log("hello");
}

//calling the function

//Example2:  Named paramaeters with parameters and with return type

function addNumbers(x,y) //parameters
{
    return x+y
}
// console.log(addNumbers(2,3)); //arguments
// //or
// res=addNumbers(2,3);
// console.log(res);

//console.log((addNumbers(1))); //NaN-when we do invalid operation it will return NaN
console.log((addNumbers(1,2,5)));// here we pass more pararmetes it takes only required paramaeters 
// and do the opertion

//Suppose i want to pass n no of parameters, In JS its possible, we call
//them REST parameters, very useful when we dont know how many parameters we need to pass in the function
//here we use concept of arrays
// three dots can accept multiple parameters
//nums is an array

function addNumbersRest(...nums)
{
    console.log(nums)

}
addNumbersRest(10);
addNumbersRest(10,20);
addNumbersRest(10,20,30);

function addNumbersRest(...nums)
{
     let sum=0;
     for(let i=0;i<nums.length;i++)
     {
      sum= sum+nums[i]
     }
     console.log(sum)

}
addNumbersRest(10,20,30,40);

//Named function with rest parameters-Multiple types





