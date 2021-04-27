(function() {
    "use strict";

    /*** OBJECTS ***/


    /** INTRODUCTION **/

// // What is an object?


//  // New Object Instance
// console.log(losSpurs);

// // TODO: create an empty 'aboutMe' object using the `new` keyword and the Object() constructor

//  // Object Literal:
    var theSpurs = {};
console.log(typeof theSpurs);

// // TODO: create an empty 'thisIsMe' object using object literal syntax
var thisIsME = {
        name:`nathan`,
    age: 21,
        food: `canes`,
};
thisIsME["name"] = "nathan";
    thisIsME["age"] = 21;
    thisIsME["food"] = "canes";
    console.log(thisIsME)
// // what is a custom object?


// // Setting properties within object
// // okay, now let's add some information to our objects

// // using dot notation (losSpurs)
var losSpurs = new Object();
    console.log(losSpurs)
//syntax:
// nameOfObject.nameOfProperty--> this creates the property within the object
var theSpurs = {
    city:"San Antonio",
        coach: 'Gregg',
        wins:'5',
        isBestTeam: true
    }

// // your turn!
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'losSpurs' object using dot
//  notation and then print the 'losSpurs' object


// // using array notation (theSpurs)

// // syntax:
// // nameOfObject["nameOfProperty"] --> this creates a property within the object

// //  your turn!
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same
//  'losSpurs' object, using bracket notation. don't forget to assign values to these properties


// // what's the difference between dot and bracket (array) notation?

// // Avoid doing this:


// should instead be:


// // Accessing Information within Objects
// // DOT NOTATION

// // return just the value of the spurs' coach


// // ARRAY NOTATION


// // Nested Values


// // Assigning Functionality


// // THIS keyword


    /** Mini Exercises */

    /*  TODO: Create a zoo object that contains basic info about the zoo, as well as, information
          about 5 different animals. For each animal in your object, create a method that returns
           the sound of that animal using the THIS keyword
           hint: Each animal should have at least 5 properties (one of them being animalSound);
    */


    /** MATH **/

// // Math.random();

// random num between 0 and 1;


// now let's remove the decimals using toFixed


//  now let's get a whole number between 20 and 40


// let's break it down:


// // TODO:

// // Math.round();

// // Math.floor();


// // Math.ceil();

// // Math.pow();


// // Math.sqrt();


// // Math Constants

// // Euler's Number

// // Pi

// // Question: what's an example of a Math property and what's an example of a Math method?
// // What's the difference?


    /** Mini Exercises **/

// TODO: Write a function that returns a random team from the given array:
// var teams = ["76ers",
//     "Bucks" ,
//     "Bulls" ,
//     "Cavaliers" ,
//     "Celtics" ,
//     "Clippers" ,
//     "Grizzlies" ,
//     "Hawks" ,
//     "Heat" ,
//     "Hornets" ,
//     "Jazz" ,
//     "Kings" ,
//     "Knicks" ,
//     "Lakers" ,
//     "Magic" ,
//     "Mavericks" ,
//     "Nets" ,
//     "Nuggets" ,
//     "Pacers" ,
//     "Pelicans" ,
//     "Pistons" ,
//     "Raptors" ,
//     "Rockets" ,
//     "Spurs" ,
//     "Suns" ,
//     "Thunder" ,
//     "Timberwolves" ,
//     "Trail Blazers" ,
//     "Warriors" ,
//     "Wizards"]
// console.log(teams);
//
// // // solution:
// function getRandomTeam(arr) {
//
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//
//     // get random item
//     const item = arr[randomIndex];
//
//     return item;
// }
//
//
// const result = getRandomTeam(teams);
// console.log(result);
}())