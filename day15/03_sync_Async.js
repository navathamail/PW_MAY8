
/*

1. Callback with Synchronous Execution
2. Callback with Asynchronous Execution


Real scenario: Ordering food at a restaurant.

    Place your order (async call)
    Sit down and do other things while the chef makes it
    The server brings the food (callback)
*/

// Ex 1. Callback with Synchronous Execution

function placeOrder(item, notifycallback){
    console.log("Placing order for:", item);
     console.log("order is prepared", item);
     notifycallback();//// runs at last

}

// function notify()
// {
//     console.log("Order completed..")

// }
//first way
// placeOrder("pizza",notify)

// //second way
// placeOrder("pizza",function notify()
// {
//     console.log("Order completed..")

// })

//third way

placeOrder("pizza", ()=>
{
    console.log("Order completed..")

})

//  Ex 2. Callback with Asynchronous Execution -Real-world ex- Placing food order

function pizzaOrder(item, notifycallback)
{
 console.log("Placing order for:", item);

 setTimeout(()=>{
    console.log("order is prepared", item);
    notifycallback(); //// runs at last //setTimeout() makes the callback run after a delay.//
},3000) 

 

}

pizzaOrder("pizza",()=>
{
    console.log("Order completed..")

})


//Ex 3. Callback with Asynchronous Execution -Real-world ex - Fetch user
// Problem : Simulate fetching user data after 2 seconds.

function fetchUser(displayUsercallback){
    console.log('fetching the user data..')
    

setTimeout(()=>{
     let user = {name:"John",age:30}
    displayUsercallback(user);
},5000)
}
function displayUser(user){
    console.log('user recieved:', user )

}

fetchUser(displayUser)