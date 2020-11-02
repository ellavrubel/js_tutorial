
'use strict';

    function run () {

    // code
    }

    run = 'Hello, World!';  // так переопределять нельзя!

    console.log(run); // Hello, World!

    run(); // TypeError: run is not a function



// лучше импользовать function expression и const/let - будет выведена ошибка

   const test = function one(){};

   test = 'Ella';  // TypeError: Assignment to constant variable.

console.log(test);

   test();

   one = 'Rodya';

   one();  // TypeError: one is not a function


// переприсвоение другой функции значению


    function change () {
      console.log('Horray!')
    }

    change();  // Horray!

    change = function () {

      console.log('UUUU!')

    }

    change();  // UUUU!





