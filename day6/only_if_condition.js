//Program 1: Check if a character is uppercase

let ch="A";
if(ch>="A" && ch<="Z")
{
    console.log(ch + "is upper case letter");
}

/****************************** */
//Program 2: Check if a number is a multiple of 10

let num = 20;
if(num%10==0)
{
    console.log(num + "is multiple of 10");
}

// Program 3: Check login (truthy/falsy)
truthy=[]
if(truthy)
{
    console.log(truthy);
}

//Print "Positive" if a number is greater than 0

let num = 10;
if(num>0)
{
    console.log(num   + " is positive");
}
//Print "Even" if a number is divisible by 2
 let number = 12
 if(number%2==0)
 {
    console.log(number + " is even");
 }

 //Print "Eligible to vote" if age is 18 or more
 let age=18;
 if(age>=18)
 {
    console.log(age + " years is eligible to vote");
 }

 //Print "Hot" if temperature is above 35
 let temperature=40;
 if(temperature>35)
 {
    console.log(temperature + " Hot ");
 }

 //Print "Pass" if marks are 35 or more

 let marks = 50;
 if(marks>=35)
 {
    console.log(marks + " is pass")
 }

 //Print "Big number" if a number is greater than 100.
 let number = 1001

if(number>100)
{
console.log(number +" is Big number");
}

//Print "Teenager" if age is between 13 and 19.

let age=14;
if(age>=13 && age<=19)
{
    console.log(age + " is teenager");
}

//Print "Free delivery" if order amount is above 500.

let orderAmount=600;
if(orderAmount>500)
{
    console.log(orderAmount + " is free Delivery");
}

//Print "Correct password" if password equals "admin123"

let password = "admin123";
if(password==="admin123")
{
    console.log(password + " is correct password");
}

//Print "Vowel" if character is a, e, i, o, or u

let char="i";
if(char=="i" || char=="a"||char=="e"||char=="o"||char=="u")
{
    console.log(char + " is vowel")
}

//Print "Night mode" if current hour is greater than 18.
let currentHour = 20;
if(currentHour>18)
{
    console.log(currentHour+" Night mode");
}
//*****************(if else program)
// Program 4: Check if a person is a teenager//check with sir

let personAge=10;
if(personAge==15)
{
    console.log("Person is teenager");
}
else{
    console.log('Not teenager');
}

//// Program 5: Find larger of two numbers
let a=10,b=20;
if(a>b)
{
    console.log("not larger number");
}
else
{
    console.log("the larger numer is "+b);
}
///Program 6: Check number sign
let number = 0;
if(number>0)
{
    console.log("Positive sign");
}
else if(number<0)
{
    console.log("Negative")
}
else{
    console.log("zero");
}

// Program 7: Even or Odd
let num=9;
if(num%2===0)
{
    console.log("even");
}
else{
    console.log("odd");
}

// Program 8: Grade Calculator
let marks=45;
if(marks>=75 && marks<=100)
{
    console.log("Grade A");
}
else if(marks>=50 && marks<=74)
{
    console.log("Grade B");
}
else{
    console.log("Fail");
}

// Program 9: Age Category
let age=0;
if(age>=0 && age<=10)
{
    console.log("baby category");
}
else if(age>=11 && age<=20)
{
    console.log("teeange");
}
else if(age>=21 && age<=30)
{
    console.log("youth")
}
else{
    console.log("elderones")
}

// Program 10: Weekend or Weekday
let day="Monday";
if(day=="Sunday" || day=="Saturday")
{
    console.log("weekend");
}
else{
    console.log("Weekday")
}
    
// Program 11: Password strength
let password = "abc@123";

if(password && password.length>="6")
{
    console.log("strength");
}
else
    {
    console.log("weak password");
}

//// Program 12: Temperature Check
let temp=40
if(temp>=30 && temp<=40)
{
    console.log("medium hot");
}
else if(temp>=41 && temp<=50)
{
    console.log("Hot");
}
else{
    console.log("cool");
}
// Program 13: Stock availability
let stock=0
if(stock==0)
{
    console.log("In stock");
}
else{
    console.log("out of stock");
}

//////////////////////////////
// 3. NESTED IF PROGRAMS
//////////////////////////////

// Program 14: Check if number is positive and even
let num = -8;
if(num>0)
{
    if(num%2===0)
    {
        console.log("num is positive and even");
    }
    else{
        console.log("Negative")
    }
}
else{
    console.log('unkonown number');
}

// Program 15: Largest of three numbers
let x=8,y=9,z=10;
if(x>y && x>z)
{
    console.log(x + "is largest");
}
else if(y>z && y>x)
{
    console.log(y + "is largest");
}
else{
    console.log(z + "is largest");
}

//// Program 16: Divisible by 2 and 3
let num=12;
if(num%2==0 && num%3==0)
{
    console.log(num + "is divisible by 2 and 3");
}
else
{
    console.log("not divisble");
}

// Program 17: Vowel or Consonant
let ch1="p";
if("aeiouAEIOU".includes(ch1))
{
    console.log(ch1 + " is vowel");
}
else{
    console.log("consonant");
}