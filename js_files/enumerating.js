

    function Circle(radius) {

        this.radius = radius;
        this.draw = (function () {
            console.log("draw");
        })
    }
    const another = new Circle(1);

    // to enumerate prop

    for (let key in another){

        if(typeof another[key] !== 'function')

            console.log(key, another[key]);
    }

    //

    // to get all the keys of an object (returns an array)

    const keys = Object.keys(another);
    console.log(keys);


    //    to check if there is a property

    if ('radius' in another)
        console.log('Another has a radius');

    //
