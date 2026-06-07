// Assignment 1 :Create an empty array and print it along with its length.

let a=[];
console.log(a.length);

// Assignment 2 :create an array with values [5, 10, 15, 20] and print all values.
function array()
{
let b=[10,20,30,40];
for(let i=0;i<b.length;i++)
{
    console.log(b[i]);
    return b
}
}
console.log(array());

// Assignment 3 : Create an array using new Array(1, 2, 3) and print length.

let c = new Array(1, 2, 3);
console.log(c.length);

// Assignment 4 : Create [7] and new Array(7) and print outputs.

let d=[7];
console.log(d);

let e=new Array(7);
console.log(e);

// Assignment 5 : Print elements of ["A", "B", "C"].

let f=["A", "B", "C"];
for(let i=0;i<f.length;i++)
{
    console.log(f[i]);
}

// Assignment 6 : Print Indexes using for...in
let g=[10,20,20,40];
for(let i in g ){
    console.log(i[0]);
}

// Assignment 7 : Print Values using for...of
let h=[45,67,89,9];
for (let values of h){
    console.log(values);
}

// Assignment 8 :  Sum of Array Elements
// Find sum of [10, 20, 30].

function addition(sum)
{
let add=0;
for(i=0;i<sum.length;i++)
{
add=add+sum[i];
}
return add
}
console.log(addition([10, 20, 30]))

// Assignment 9 : Search Element.
// Write a function to search element  in [10, 20, 30].

let array1=[10, 20, 30];
let searchitem =100;
for(let i=0;i<array1.length;i++)
{
if(array1[i]===searchitem)
{
console.log("element found");
break
}
}
console.log("element not found")

// Assignment 9 : Search Element.
// Write a function to check if 25 exists in [50, 60, 70].

let ele = 25;
function arr(ele,arr)
{
for(let i=0;i<arr.length;i++)
{
    if(ele===arr[i])
    {
        console.log("element found")
        return true
    }
    return false
}
}
console.log(arr(25,[50,60,70]));

// Assignment 10 :Count Elements
// Count number of elements in array using loop

let count = 0;
let arr2 = [10,20,40,50,78];
for(let i=0;i<arr2.length;i++)
{
    count=count+1;

}
console.log(count);

// Assignment 11 : Convert to Lower Case
//Convert ["JAVA", "JS"] to lowercase.


function LC(lowercase)
{
let result=[];
for(let i=0;i<lowercase.length;i++)
{
result[i]=lowercase[i].toLowerCase();
}
return result
}

let lowercase = ["JAVA", "JS"];
console.log(LC(lowercase));

// Assignment 12 : Print Mixed Data
// Print [1, "Hello", false] using for...of.

let arrb = [1, "Hello", false];
for(let value of arrb)
{
console.log(arrb);
}

// Assignment 13 : Copy Array
//Create a new array by copying values from [5, 10, 15].

let arrc = [5, 10, 15];
let emparr = [];
for(let i=0;i<arrc.length;i++)
{
emparr[i]=arrc[i];
}
console.log(emparr);

// Assignment 14 : Find Largest Number
// Find largest number in [10, 50, 30].

let d = [10, 50, 30,100,200];
let maxarr = d[0];//10
for(i=1;i<d.length;i++)
{
if(d[i]>maxarr)
{
    maxarr=d[i];
}
}
console.log(maxarr)

// Assignment 15 : Reverse Array (Manual)
//  Reverse [1, 2, 3] without using methods

let arrM = [1,2,3]
let revarr = [];
for(let i=arrM.length-1; i>=0; i--)
{
revarr[revarr.length]=arrM[i];

}
console.log(revarr);

// Assignment 16 : Print Even Numbers
// Print only even numbers from [1, 2, 3, 4, 5, 6].

let arr16 = [1, 2, 3, 4, 5, 6]
let evennum = [];
for(i=0 ; i<arr16.length; i++)
{
    if(arr16[i]%2==0)
    {
    
        console.log(arr16[i]);

    }
}

// Assignment 17 : Count Even Numbers
// Count how many even numbers are present in [2, 5, 8, 11, 14].

let arr17 = [2, 5, 8, 11, 14];
let count=0;
for(i=0;i<arr17.length;i++)
{
    if(arr17[i]%2==0)
    {
        count=count+1;

    }  
}
console.log(count)

// Assignment 18 : Replace Values in Array
//Create a new array where each value in [1, 2, 3] is multiplied by 10.

let arr18 = [10,20,30];
let resarry = [];

for(i=0;i<arr18.length;i++)
{
    resarry[i]=arr18[i]*10;
}
console.log(resarry)

// Assignment 19 : Check All Elements Positive
// Write a function to check if all elements in [1, 2, 3, -1] are positive.


function positive(arr)
{
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>0)
    {
        return true;

    }
   
}
 return false;
}

let arr19=console.log(positive([1, 2, 3, -1]))


// Assignment 19 : Check All Elements Positive
// Write a function to check if all elements in [1, 2, 3, -1] are positive.

function isAllPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return false;
    }
    return true;
}
console.log(isAllPositive([1, 2, 3, -1]));

// Assignment 20 : Find Index of Element
// Write a function to find index of 30 in [10, 20, 30, 40].




function findindex(searchelement,arr)
{
for(i=0; i<arr.length; i++)
{
    if(arr[i]===searchelement)
        {
            return 1

    }
}
return -1
}
console.log(findindex(50,[10, 20, 30, 40]));












