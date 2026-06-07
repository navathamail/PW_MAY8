/* requirement
i/p: words=["hello","world","javascript"]
O/p: results=["HELLO","WORLD","JAVASCRIPT"]
*/
//let words= ["hello","world","javascript"];

function captializewords(words)
{
    let result=[];
    for(let i=0;i<words.length;i++)
    {
    result[i]=words[i].toUpperCase()
    }

     return result;
    

}
//console.log(result)
let words=["hello","world","javascript"]

let res=captializewords(words)
console.log(res);