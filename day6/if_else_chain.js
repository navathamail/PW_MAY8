//if else condition

//Example 1: If/Else If Chain  -An else if chain allows checking multiple conditions in sequence.
// Grading system: A (90+), B (80+), C (70+), D (60+), or F (below 60). 

let score = 200;
if(score>=90)
{
    console.log("Grade A");

}
else if(score>=80)
{
    console.log("Grade B");
}
else if(score>=70)
{
    console.log("Grade C");
}
else if(score>=60)
{
console.log("Grade D");
}
else
{
console.log("Fail");
}
//*******************************

//if inside if -->Nested if
////First checks if the user is logged in, then checks their
//  role (admin, editor, viewer) to determine access level.

let userLoggedin=true;
let userRole="abcd";

if(!userLoggedin)
{
    if(userRole==="admin")
    {
        console.log("Admin have all the rights");
    }
    else if(userRole==="Editor")
    {
        console.log("Admin have all the rights");
    }
     else if(userRole==="Viewer")
    {
        console.log("Admin have all the rights");
    }
    else{
        console.log("NO role defined")
    }
}
else{
    console.log("you are not logged in");
}
//***************************** */





















