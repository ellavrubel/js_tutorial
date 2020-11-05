
'use strict';

    (function  (a) { // можно не () а использовать !/void/~ перед function

      console.log(`My name is ${a}`);

    })('Ella');   // выполняется сразу, единожды  - My name is Ella



//     если  IIFE присвоена переменной, ее вызов возможен далее по коду


    const testFunc = (function() {

     return ('I like a 7 number!');

    })();

    console.log(testFunc); // I like a 7 number!





