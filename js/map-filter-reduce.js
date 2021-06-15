"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//#1:
// let userLanguages = users.filter((languages) => {
//     return languages.languages.length >= 3;
// });
//
// console.log(userLanguages);

//#2:
// let emails = users.map(function(user){
//     return user.email;
// });
//
// console.log(emails);

//#3:
// let totalYears = users.reduce(function(totalYears, user){
//
//     return totalYears + user.yearsOfExperience;
// }, 0);
//
// let averageYears = totalYears / users.length;
//
// console.log(averageYears);
// console.log(totalYears);

//#4:
//Ternary:
// let longestEmail = users.reduce( function(user, email){
//     return user.email.length > email.email.length ? user : email;
// });

// Another way to do it:
let longestEmail = users.reduce(function(longestEmail, user){
    if(user.email.length > longestEmail.length){
        longestEmail = user.email
    }
    return longestEmail;
}, "");

console.log(longestEmail);

//#5:
let usernameString = users.reduce(function(accumulator, user){
    return `${accumulator} ${user.name},`;
}, ``).slice(0, -1) + ".";

console.log(usernameString);
