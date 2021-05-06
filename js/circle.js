(function () {
    'use strict';
    (function() {
        "use strict";

        // create a circle object
        let circle = {
            radius: 3,

            getArea: function (userRadius = this.radius) {
                // TODO: complete this method
                // TODO: return the proper value
                return (Math.PI *(Math.pow(this.radius, 2) ) );

                // if (!isNaN(userRadius)) {
                // 	let area =  Math.pow(parseInt(userRadius),2) * Math.PI;
                // 	return area;
                // }
                // return NaN;
            },

            logInfo: function (doRounding) {
                let round = Math.round(this.getArea(this.radius));
                // TODO: complete this method.
                if (doRounding){
                    console.log(`Area of a circle with radius: ${this.radius} is: ${round}`);
                } else {
                    console.log(`Area of a circle with radius: ${this.radius} is: ${this.getArea()} `);
                }

                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

            }
        };

        // log info about the circle
        console.log("Raw circle information");
        circle.logInfo(false);
        console.log("Circle information rounded to the nearest whole number");
        circle.logInfo(true);


        // TODO: Change the radius of the circle to 5.
        circle.radius = 5;
        // log info about the circle
        console.log("Raw circle information");
        circle.logInfo(false);
        console.log("Circle information rounded to the nearest whole number");
        circle.logInfo(true);

    })();

})();