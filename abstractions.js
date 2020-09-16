// Abstractions - hide the complexity and show only relevant details

function Circle(radius) {

    this.radius = radius;

    // hides it from the outside

    let defaultLocation = {x: 1, y: 0};
    let computerOptimumLocation = function () {
        // ....
    };

    //

    this.draw = (function () {

        computerOptimumLocation();

        console.log("draw");

    })
}

const another = new Circle(10);