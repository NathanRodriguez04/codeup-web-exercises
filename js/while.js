"use strict";
// #1
var number = 2

while(number < 65536){
    console.log(number);
    number = number * number;
}

// #2

var randomNumber = Math.floor(Math.random() * (100 - 50)) + 50;
var cones = randomNumber;
var purchasedCones = Math.floor(Math.random() * (5 - 1) + 1);
var conesBought = purchasedCones;

do {
    console.log(`I have ${cones} cones left to sell`)
    cones -= conesBought;
} while (cones >=0)
console.log(`Sold out!!!`)
// #3
var parkingspots = 20
do {
    console.log(`there are ${parkingspots} parking spots left`)
    parkingspots -= 2;
}while (parkingspots > 0);
console.log(`the parking lot is full`)
console.log()