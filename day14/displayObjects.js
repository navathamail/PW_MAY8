

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
  color: "Black",
};


//Ex1: Iterating object use  loop statement
for(let k in car){
    console.log(k + ":" + car[k])
}

//Ex2:  Capture only keys from an object

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
  color: "Black",
};

let car_keys = Object.keys(car);//keys() returns an array of keys
console.log(car_keys) //[ 'brand', 'model', 'year', 'color' ]

let car_values = Object.values(car); //values() returns an array of values
console.log(car_values)//[ 'Toyota', 'Camry', 2025, 'Black' ]

//Ex4: Capture keys & values using Object.entries()
// entries() method return entries in form of nested array.
//Entry is combination of key and value pair


let fruits = {
            Bananas:300, 
            Oranges:200, 
            Apples:500
        };

        //console.log(Object.entries(fruits)); //[ [ 'Bananas', 300 ], [ 'Oranges', 200 ], [ 'Apples', 500 ] ]

for(let [fruit,value] of Object.entries(fruits))
{
    console.log(fruit+ ":" +value)
}


//Ex 5: get the length of keys in a object (how many keys) / number of attributes available in object


let fruits = {
            Bananas:300, 
            Oranges:200, 
            Apples:500
        };

        let fruits_keys=Object.keys(fruits)
        console.log(fruits_keys.length)
