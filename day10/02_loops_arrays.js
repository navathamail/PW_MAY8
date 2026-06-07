
//3 differnt loops working with arrays

//1.classic for loop-->Most preferable
//when we use classic for loop
//best performance
//when you ned index control

// 1.Classic for loop (Index-based loop)
// 2. for...in loop (Keys / Indexes)
// 3. for...of loop (Values)  // ES6



// Example 1: Classic for loop (Index-based loop)
/*
When to use:
When you need index control
When you want to modify elements using index
When you need forward/backward iteration
Full control over loop
Can skip, reverse, or break easily
Best for performance-critical loops
*/

let empNames=["J","K","P","Y"];
//for(1=0;i<=empNames.length-1;i++)
for(i=0;i<empNames.length;i++)
{
    console.log(empNames[i]);
}
/********************************************************************** */
//for...in loop(gives indexes of values)-not prefereable
/*
When to use:
When you want indexes (keys) of array
Returns indexes as strings
Mainly used for objects, not recommended for arrays
*/


let empIds = [100,101,102,103];
for(let i in empIds) // here i is the index of the elements
{
    //console.log(i);
    console.log(empIds[i]);
}

//for...of loop(only gives values)-prefers-designed for non primitive
/*
When you want direct values
No index needed
Works with arrays, strings, maps, sets
Best for simple iteration
Cleaner and modern approach (ES6)
*/

let mixedDataTypes =["John",2,null,true]; //array contains diff types of data-always follows ascending order,no descending order
for(let value of mixedDataTypes) //value is varaible here
{
    console.log(value);
    console.log(mixedDataTypes.length);

}
