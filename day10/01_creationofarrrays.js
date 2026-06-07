// creating arry with  elements with literals

let a=[1,6,7];
console.log(typeof(a));
console.log(a.length);
console.log(a);

// creating arry with no elements
let b=[];//empty array
console.log(b);
console.log(typeof(b)); //object
console.log(b.length); //length of array

//method 2 : using new keyword we are creating array(not preferable) array()-constructor

let arr=new Array(10,20,30)
console.log(typeof(arr)); //object
console.log(arr.length);

let arr1 = new Array(7,0,1);
console.log(arr1);
console.log(arr1[7]);
console.log(typeof(arr1)); //object
console.log(arr1.length);

let arr2=new Array()
console.log(arr2)

//problem with method2

let a1=[5];
console.log(a1);
console.log(a1[0]);
console.log(a1.length);

let a2= new Array(5);
console.log(a2); //[ <5 empty items> ]-here 5 is considered as 5 empty spaces
console.log(a2[0]); //undefined -only empty spaces no value na so undefined
console.log(a2.length); //5 - 5 empty spaces , so length is 5