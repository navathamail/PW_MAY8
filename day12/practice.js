 //1. push()
// =======================================================
// Problem 1: Add a new student to the end of the array
// Method Used: push()
// Syntax: array.push(element1, element2, ...)

let students = ["john" ,"joseph", "paul"]
let newStudentsList = students.push(["Kailu"])
console.log(newStudentsList); //returns the length of the array, becuse [kailu ] is itself one array

let stud1 = ["A","B", "C"];
stud1.push("D");
console.log(stud1);

// Problem 2: Add multiple numbers

let num1 = [1,2,3,4,5]
num1.push(9,10,11);
console.log(num1);


// =======================================================
// 2. pop()
//// 2. pop()-->pop() does not take an argument. It always removes the last element from the array.
// Removes the last element and returns it
// Syntax: array.pop()
// =======================================================
// Problem 3: Remove last element

let num2 = [2,4,7,9];
num2.pop(7);
console.log(num2);

// Problem 4: Get removed element
let num3 = [7,9,10];
let removedElement = num3.pop();
console.log(removedElement);

// 3. shift()
// Removes the first element and returns it
// Syntax: array.shift()

let num4 = [10,15,34];
let removed = num4.shift();
console.log(num4);
console.log(removed);

// Problem 6: Get removed first element
let arr = ["a","b","c"];
let removed = arr.shift();
console.log(arr);
console.log(removed);

// 4. unshift()
// Adds elements to the beginning and returns new length
// Syntax: array.unshift(element1, element2, ...)

let num5 = [10,12,14,8,9];
let added=num5.unshift(6,7);
console.log(num5);
console.log(added);

// Problem 7: Add element at beginning
let num6 = [2,3,3,6];
let added = num6.unshift(8);
console.log(added);

//Problem 8: Add multiple elements

let num7 = [2];
let added = num7.unshift(5,6,8,8);
console.log(added);


// 5. concat()
// Combines arrays (does not modify original arrays)
// Syntax: array.concat(array1, array2, ...)

// Problem 9: Merge two arrays
let arr1=[3,5];
let arr3 = ["a","c"];
let arr4 = ["arb","uio"]

let result = arr1.concat(arr3,arr4)
console.log(result)

// Problem 10: Merge multiple arrays

console.log(arr4.concat(["r","r"]))

//6. slice()
// Extracts part of an array (end index is exclusive)
// Syntax: array.slice(start, end)//start from the given index and ends before index number

// Problem 11: Get part of array
let arr1=[2,6,9,0,8];
let arr2 = arr1.slice(1,3);
console.log(arr2);

let arr1 = ["r","u","p","m"];
let arr2 = arr1.slice(2,4);
console.log(arr2);

// Problem 12: Copy entire array
let copiedarr = arr1.slice(2,4);
console.log(copiedarr);

// 7. splice()
// Adds/removes elements (modifies original array)
// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// Ex 1: Remove elements
let fruits = ["apple", "banana", "orange", "mango"];
let res =fruits.splice(1,3);
console.log(res);

// Problem 13: Remove elements
let arr13 = [1, 2, 3];
console.log(arr13.splice(1,1))

// Problem 14: Add elements
let arr14 = [1,2]
console.log(arr14.splice(1,1))

let arr14 = [1, 3];
arr14.splice(1, 0, 2);
console.log("14:", arr14);

// 8. indexOf()
// Returns index of element, or -1 if not found
// Syntax: array.indexOf(searchElement) 

let arr15 = [3,6,7]
console.log(arr15.indexOf(6));

// Problem 16: Element not found

console.log(arr15.indexOf(100));

// Problem 16: Element not found
console.log("16:", arr15.indexOf("x"));

// 9. at()
// Returns the element at the specified index in the array.
//Synatax: array.at(index)

// Problem 17: Get last element
let arr16 = [10,20,30];
console.log(arr16.at(5));


// Problem 18: Get first element
console.log(arr16.at(10));

// =======================================================
// 10. includes()
// =======================================================
// 10. includes() : searching an element
// Checks if element exists (returns true/false)
// Syntax: array.includes(element, fromIndex

let arr17 = [10,20,30];
console.log(arr17.includes(45,0));

// Problem 19: Check existence
console.log(arr17.includes(30,0));

// Problem 20: Check non-existing
console.log("20:", arr17.includes(5));

// 11. toString()
// Converts array to string
// Syntax: array.toString()

// Problem 21: Convert array to string
let arr18 =[1,2,3];
console.log(arr18.toString());


// Problem 21: Convert array to string
let arr21 = [1, 2, 3];
console.log("21:", arr21.toString());

//12. reverse() Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
//Syntax: array.reverse()

let arr22 = [1,2,3];
console.log(arr22.reverse());

// Problem 24: Reverse string array
let arr24 = ["a", "b", "c"];
arr24.reverse();
console.log("24:", arr24);

// 13. flat()  — flattens nested arrays

let arr25 = [[1,2],[2,4]];
console.log(arr25.flat());

// Problem 26: Deep flatten
let arr26 = [1, [2, [3]]];
console.log("26:", arr26.flat(2));

//14 . sort()  
//sort() compares as strings (which can give wrong results for numbers). 
// Use a comparator function for numeric sorting.


//Ex1:

let fruits = ["banana", "apple", "cherry"];
fruits.sort()
console.log(fruits);

// Problem 27: Sort numbers ascending
let arr27 = [3, 1, 2];
console.log(arr27.sort());

arr27.sort((a, b) => a - b);
console.log("27:", arr27);

let numbers = [10, 1, 21, 2];
numbers.sort()
console.log(numbers)  //[ 1, 10, 2, 21 ]

let numbers = [10, 1, 21, 2];
numbers.sort((a,b)=>{
    return(a-b)
})

