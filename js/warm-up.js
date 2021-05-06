"use strict";

//Make a function named trim(string) that removes empty spaces before and after the input,
// the returns that trimmed string
// function trim(input){
// return input.replaceAll(' ','')
// }
//
// console.log(trim("the dog got up "))


// Write a function called last(input) that returns the last character of a string
function last(input){
    return input.charAt(input.length-1)
}

console.log(last("nathan"))

function remainder(number, divisor){
    return number % divisor;
}

console.log(remainder(9,2))