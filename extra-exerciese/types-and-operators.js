(function (){
    "use strict";

// function isOdd(number){
//
//     return number % 2 === 1;
// }
//
//     console.log(isOdd(4))
// //-----------------------------------
//
//     function isTrue(input) {
//         return input === true
//     }
//
//     console.log(isTrue(1))
//     console.log(isTrue(false))
// //--------------------------------------
//
//
//     function isFalse(input){
//     return input === false
//     }
//
//     console.log(isFalse(false))
//     console.log(isFalse(true))
// //----------------------------------------------
//
//
//     function isTruthy(input){
//     return input == true
//     }
//
//     console.log(isTruthy(1))
//     //------------------------------------------------
//
//
// function isFalsy(input){
//     return input == false
// }
//
//     console.log(isFalse(0))
// //---------------------------------------------
//
//     function subtract(a,b){
//     return a - b;
// }
//
//
//     console.log(subtract("10","4"))
//
//     function multiply(a,b){
// return a * b}
//         console.log(multiply(2,4))
//
// function divide(a, b){
// return a / b;
// }
//
//     console.log(divide(12,2))
//
//     function multiplyIfNumeric(input1, input2){
//         var product = Number(input1) * Number(input2);
//         if (isNaN(product) ) {
//             console.log("product is NaN")
//             return false;
//         }else{
//             console.log("product is a number")
//             return true;
//         }
//     }
//
//     console.log(multiplyIfNumeric("be string" ,5))



// TODO: write a function called toUppercase which takes in one input and
    //  returns that input in uppercase IF (and only if) the input is a non-numeric string
    //  otherwise, return false

    function toUppercase(x) {
        if (typeof x === 'string' && isNaN(x)) {
            return x.toUpperCase();
        }
            return false;

    }

    console.log(toUppercase('nate'))

