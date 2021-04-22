//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3.pizza[0]);
console.log(person3.tacos);
console.log(person3.burgers);
console.log(person3.ice_cream[1]);
console.log(person3.shakes[0].mcDonalds);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age  = age;
}

Person.prototype.printInfo = function() {
    console.log(this.name + " is " + this.age + " years old");
};

var ada = new Person('ada', 22);
ada.printInfo(); // => ada is 22 years old

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isgreaterthan = (string) => {
    return new Promise( (resolve,reject) => {
        if(length(string) > 10 ){
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
}

isgreaterthan("This is going to be more than ten words i hope")
//Happy resolver path
.then( (result) => {
    console.log('This is a ${result}')
