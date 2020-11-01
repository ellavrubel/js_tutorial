// 'use strict';
//
//      function doHomeWork(subject, callback) {
//
//             console.log(`Today I am doing my ${subject}!`);
//
//             callback();
//
//      }
//
//      doHomeWork('cooking', function () {
//
//          console.log(`Finished my cooking!`);
//
//      });  // Today I am doing my cooking! Finished my cooking!
//
//
// //     callback f может быть определена не только сразу как переданный аргумент, но также и как отдельная функция, написанная в любом месте кода
//
//      function firstCall(sub, callback) {
//
//          console.log(`I am first-executed function!. My name is ${sub}.`);
//
//          callback();
//      }
//
//      function secondCall() {
//
//          console.log('I am second-executed function!');
//      }
//
//      firstCall('Ella', secondCall); // I am first-executed function!. My name is Ella. I am second-executed function!

//

    function sayHello (callback) {

      callback();
    }

    sayHello(function first() {  // функция передана в кач аргумента другой функции - callback

      console.log('Hello, Joe!'); // Hello, Joe!
    });


//

    function run (cb) {

      cb();
    }


    function sayGood1 () {
      console.log('Goodbye!');
    }

    function sayGood2 () {
      console.log('Good evening!');
    }


    run(sayGood1);  // Goodbye!
    run(sayGood2);  //  Good evening!

//





