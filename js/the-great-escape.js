"use strict";

function getkindofdog(){
    return prompt("what kind of dog is it?");
}

console.log(getkindofdog());

function getcontactinfo(){
    return prompt("how do i get in contact with you");
}

console.log(getcontactinfo());

function getdogname(){
    return prompt("what is the dog names");
}

console.log(getdogname());

function playTheGreatEscape(){
   var dogkind = getkindofdog();
   var dogname = getdogname();
   var contactinfo = getcontactinfo();

   alert("time to search for the doggo");
   alert("i see a dog");

   var kindofdog = getkindofdog();

   var issamekindofdog = kindofdogseen === dogkind;

   if (issamekindofdog && confirm("does dog respond to name: " + dogname)){
       alert("puts leash on " + dogname);



       }


}

playTheGreatEscape();