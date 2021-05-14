(function (){
    "use strict"
// --------
    var showMultiplicationTable = 9;
    for (var i = 0; i <= 10; i++) {
        var result = showMultiplicationTable * i;
        console.log(showMultiplicationTable + ' * ' + i + ' = ' + result);
    }
    console.log(``)


    function randomNumber1(){
        return Math.floor(Math.random() * 200 ) + 20;
    }

    function oddOrEven(){
        for(let i = 0; i < 10; i++){
            let num;
            num = randomNumber1();
            if(num % 2 === 0){
                console.log(`${num} is even`);
            }else {
                console.log(`${num} is odd`);
            }
        }

    }
    oddOrEven();
    console.log("");



        function printNumberDecrementBy5() {
            for (let i = 100; i > 0; i -= 5) {
                console.log(i);
            }
        }

        printNumberDecrementBy5()
        console.log(``)

        // function constructNum(num) {
        //     let total = 0;
        //     for (let i = num - 1; i >= 0; i--) {
        //         total = total + num * Math.pow(10, i);
        //     }
        //     return total;
        // }

        function printNumber() {
            for (let i = 1; i <= 9; i++) {
                console.log(constructNum(i));
            }
        }

        printNumber();
        console.log("");
    }())