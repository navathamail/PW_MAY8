

/*Methods inside the object
------------------
Methods are actions that can be performed on objects.
Methods are functions stored as property values.
In an object method, 'this' refers to the object.*/

let person={

    firstName:"John",
    lastName:"Kenedy",
    id: 3344,
    age: 50,
    fullName: function(){
        return (this.firstName+ " "+this.lastName)
    }
}

//1. Calling Object Method

// console.log(person.fullName())

// console.log(person.firstName) //John
// console.log(person.id) // 3344

// console.log(person.fullName()) //John Kenedy  // called the method from an object

console.log(person.fullName) // invalid //[Function: fullName]  

