"use strict";

// $(document).ready(function () {
//     alert($("#growOnTrees").text());
// });

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

// $(".codeup").css('background-color', '#FFC0CB',"1px");

// $("li").css('font-size', "20px");

// $(document).ready(function(){
//     alert($("h1").text())
// });

// $(document).ready(function(){
//     alert($("h1").html())
// });

// $("h1"[,"p"[,"li"]])

// $(document).ready(function (){
// $("h1","p","li").css('background-color', '#FFC0CB',"1px");
// });

$("h1").click(function (){
    alert("STOP CLICKING ME!!!!");
    $(this).css('background-color', '#FF0');
});

$("p").dblclick(function(){
    alert("NOW LOOK AT WHAT YOU'VE DONE");
    $(this).css("font-size","18px");
});

$("li").hover(
    function (){
        // alert("AHHHH!!!!!!");
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'white');
    });

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});