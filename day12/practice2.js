
// 15. Array De-structuring
//Extract values from arrays into variables using destructuring syntax. 
// The rest operator ... collects remaining elements.

let [a,b,c]=[10,20,30];
console.log([a,b,c]);

console.log(a);
console.log(b);
console.log(c);

// rest operator
//Ex2:  rest
let [a,b,c,...d] =[10,20,30,40,50,60]

console.log(a) //10
console.log(c) //20
console.log(c) //30
console.log(d)

 //. join()
// =======================================================

// Problem 29: Join array elements
let arr29 = ["a", "b", "c"];
console.log("29:", arr29.join(" +"));

// Problem 30: Join with space
console.log("30:", arr29.join(" "));

// Problem 32: Sum using forEach
let num = [1,2,3];
let sum = 0;

num.forEach(num=>{
    sum=sum+num;
})
console.log(sum);

//map()uses goes to operator
// Problem 33: Double numbers

let num = [1,2,3];
res = num.map(num=>num*2)
console.log(res)

// Problem 34: Convert to uppercase
let num = ["a","b","c"];
res = num.map(num=>num.toUpperCase());
console.log(res)

// 18. filter()
// Problem 35: Get even numbers

let x = [1,2,6];
console.log(x.filter(x=>x%2===0))

// Problem 36: Filter strings
arr10 = ["a","b"];
console.log(arr10.filter(arr10=>arr10.length>3))

