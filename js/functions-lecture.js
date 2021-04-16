"use strict";

//var num = 5;

//num = num + 5;

//console.log(num);

// creating an interface for other code to use without knowing what happens inside add()
// returns the result of adding num1 and num2 together

//function add(num1, num2){
//    return num1 + num2;
//}
// console.log("the result of add() is: " + add(-5,10));  // <--- arguments here

//var myNum = 12;
//var myNum2 = 21;

//console.log("the result of add() is: " + add(myNum, myNum, myNum2)); //<--- arguments here

// returns the difference of subtracting num2 from num1

//function subtract(num1, num2){
//   return num1 - num2;
//}
//
//console.log("the result of subtract() is " + subtract(10,2));


//return the difference of mutiply

//function mutiply(num1, num2){
  //  return num1 * num2;
//}

//console.log("the result of mutiply() is " + mutiply(10,2));

//return the difference of divide

//function divide(num1, num2){
  //  return num1 / num2;
//}

//console.log("the result of divide() is " + divide(12,2));

//function addWithDefaults(num1, num2  =0){
 //   return num1 + num2;
//}

//console.log(addWithDefaults(2, 2));


{
    {
        let number = 2;
        {
            console.log(number);
        }
    }
}

var number2 = 10;

 function scopingfun(){
     var number = 2;
     console.log(number + number2);
 }
scopingfun();