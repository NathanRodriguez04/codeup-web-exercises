(function() {
    "use strict";

    // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object


var yourFaveSportsTeam = new Object()
    console.log(yourFaveSportsTeam)

var yourFaveSportsTeam = {

    city: `Los Angeles`,
    team: `sentinels`,
    coach: `Shahzam`,
    sports: `esports`,
}
    yourFaveSportsTeam["numOfPlayers"] = 5;
    yourFaveSportsTeam["numOfChampsWon"] = 1;
    yourFaveSportsTeam["isBestTeam"] = true
console.log(yourFaveSportsTeam)

function showObjProp(obj){
    return[obj.sports, obj.numOfPlayers]
}

    console.log(showObjProp(yourFaveSportsTeam))
}())
var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}
console.log(theSpurs.otherNBATeams.Mavs);
console.log(theSpurs.playerInfo[0].age);
console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.


/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/

var theZoo = new Object()

console.log(theZoo)

var theZoo = {
    name: `nate's zoo`,
    city: `SA`,
    isOpen: true,
    ranking: 100,
    yearOpened:2020,
    animal: ["monkey", "lion", "tiger", "gorillas", "red panda"],
    animalinfo: [
        {
         animal: `monkey`,
         hasFur: true,
            ismammal: true,
            canFly: false,
        },
        {
            animal: `lion`,
            hasFur: true,
            ismammal: true,
            canFly: false,
        },
        {
            animal: `tiger`,
            hasFur: true,
            ismammal: true,
            canFly: false,
        },
        {
            animal: `gorillas`,
            hasFur: true,
            ismammal: true,
            canFly: false,
        },
        {
            animal: `red pandas`,
            hasFur: true,
            ismammal: true,
            canFly: false,
        },
    ]
}
console.log(theZoo)