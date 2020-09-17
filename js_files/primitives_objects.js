// primitives - Number, String, Boolean, Symbol, underfined, null     Objects - Object, Function, Array


        let x = 10;
        let y = x;

        x = 20;

        // in console x = 20, y = 10  primitives are copied by their value and independent from each other

        let x1 = {value: 15};
        let y1 = x1;

        x1.value = 30;

        //  in console x1 = 30 & y1 = 30  objects are copied by their reference



        let number = 10;

        function increase(number) {
            number++;
        }

        increase(number);  // number as a parameter isn't seen outside the function


        let obj = {value: 10};

        function increase1(obj) {
            obj.value ++;
        }

        increase1(obj);
        console.log(obj);

