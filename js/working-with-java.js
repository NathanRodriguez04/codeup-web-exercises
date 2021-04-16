"use strict";

//var a = 1;
//var b = a++;
//var c = ++a;

//console.log(a); 3
//console.log(b); 1
//console.log(c); 3

//var d = "hello"
//var e = false
//d++;
//e++;

//console.log(d); NaN
//console.log(e); 1

//var perplexed; // undefined
//perplexed + 2;
//NaN
//console.log(perplexed + 2);

//var price = 2.7;
//price.toFixed(2);
//console.log(price.toFixed(2));
// 2.70

//var priceString = "2.7";
//NaN
 //*//*
// console.log(priceString.toFixed(2));
/* //false
console.log(isNaN(0));
//  false
console.log(isNaN(1));
// true
console.log(isNaN("")); //
// false
console.log(isNaN("string"));
// true
console.log(isNaN("0"));
// false
console.log(isNaN("1"));
 // False
console.log(isNaN("3.145"));
// False
console.log(isNaN(Number.MAX_VALUE));
//false
console.log(isNaN(Infinity));
//true
console.log(isNaN("true"));
// false
console.log(isNaN(true));
//true
console.log(isNaN("false"));
//false
console.log(isNaN(false));
// false
console.log(isNaN == isNaN);
// true
*/

/*
// false
console.log(!true);
//true
console.log(!false);
// true
console.log(!!true);
// false
console.log(!!false);
//0
console.log(!!0);
//false
console.log(!!-0);
//true
console.log(!!1);
//true
console.log(!!-1);
//true
console.log(!!0.1);
//true
console.log(!!"string");
//false
console.log(!!"");
//false
console.log(!!'');
//true
console.log(!!"false");
// true
console.log(!!"0");
*/
/*
var sample = "Hello Codeup";
console.log(sample.length);
sample = sample.toUpperCase();
console.log(sample);
sample = sample.toLowerCase();
console.log(sample);
var sample = "Hello Codeup";
var sample = sample + " Students";
console.log(sample);
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
var startLetter = sample.indexOf("C");
var lastLetter = (sample.indexOf("p") + 1);
console.log(sample.substring(startLetter, lastLetter));
*/

// movie rental
//var dayRate = 3;
//var dayToday = 0
//var littleMermaid;
//var brotherBear;
//var Hercules;
//if (dayToday > 0) {
  //  console.log("Check how long you've had your rental!")
//} else if (dayToday == 0){
 //   littleMermaid = dayRate*3;
   // brotherBear = dayRate*5;
  //  Hercules = dayRate*1;
  //  console.log(littleMermaid + brotherBear + Hercules);
//}

// companies
//var hoursGoogle = 6;
//var hoursAmazon = 4;
//var hoursFB = 10;
//var payGoogle = 400;
//var payAmazon = 380;
//var payFB = 350;
//var total = 0;
//if (payGoogle == 400) {
//    console.log("I made " + (payGoogle * hoursGoogle) + "$" + " at Google.");
  //  var total = (payGoogle * hoursGoogle);
//}
//if(payAmazon == 380) {
//    console.log("I made " + (payAmazon * hoursAmazon) + "$" + " at Amazon.");
  //  var total = total + (payAmazon * hoursAmazon);
//}
//if (payFB == 350) {
//    console.log("I made " + (payFB * hoursFB) + "$" + " at Facebook.");
//    var total = total + (payFB * hoursFB);
//    console.log("I Made " + total + "$" + " total.");
//}

// Students
//var classSize = 30;
//var classSchedule = "Works with Schedule"
//if (classSize < 30 && classSchedule == "Works with Schedule"); {
//    console.log("Congrats... you're enrolled!")
//}


//Product offer
var productsBought = 0;
var offerExpired = false;
var premiumMember = true;
if ((productsBought > 2 || premiumMember) && offerExpired === false) {
    console.log("Congrats your product is offered");
    if(premiumMember) {
        console.log(" Also ... thanks for being a premium customer.");
    }
}
var username = "codeup";
var password = "notastrongpassword";
if (password.length> 5) {
    var longEnoughPass = true;
    console.log("Good Pass Length");
} else console.log("Pass not long enough");
if (password.includes(username) === false) {
    console.log("Good password.");
    var includesUsername = false;
} else {
    console.log("You cant have your username inside your password.");
    var includesUsername = true;
}
if (username.length < 20) {
    var acceptableUserLength = true;
    console.log("your user is acceptable length");
} else {
    var acceptableUserLength = false;
    console.log("your user must be under 20 characters");
}
if (username){
    var username = username.trim();
}
if (password){
    var password = password.trim();
}
