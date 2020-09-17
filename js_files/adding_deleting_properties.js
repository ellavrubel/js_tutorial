

        function Circle (radius){

            this.radius = radius;
            this.draw = function () {
                console.log('draw');
            }
        }

        let circle = new Circle(10);

        // adding property to an object in constructor f()
        circle.location = {x:1};

        const propertyName = 'color';
        circle[propertyName] = {color: 'blue'}; // if you want to get smth dynamically
        //



        delete circle.location;
        delete circle['color'];

        console.log(circle);
