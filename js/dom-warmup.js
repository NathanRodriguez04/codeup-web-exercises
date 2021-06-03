(function(){
    "use strict";

    let button = $(".btn");
    let input = $(".form-control");
    let container = $("#post-container");

    button[0].addEventListener("click", function(){
        container.append(`<div style="font-weight: bold; font-size: 30px">${input[0].value}</div>`);
    });



})()