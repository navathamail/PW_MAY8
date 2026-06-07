
//search an element in an array using function
function search(ele,arr)
{
    let flag=false;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]===ele)
        {
        console.log('search element found')
        flag=true;
        break
        }
        
    }
    if(flag===false)
        {
        console.log("element not found")
        }
        
}

let searchElement=100;
let myArr=[10,20,30,40,50];

search(searchElement,myArr);