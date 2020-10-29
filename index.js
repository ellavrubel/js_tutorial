'use strict';

    // function declaration

    testFunc();  // вызов функции при помощи ()

    function testFunc (parameters) {  // function declaration - создается при помощи function (литерал), обязательно имеет имя, может быть вызвана в любом месте кода (до/после ее фактического написания (hosting), но вызов функции до ее объявления - bad practice!
    // code
    }
    console.log(typeof testFunc); // function


    // function expression (FE) фунция как часть какого-либо выражения, например присвоение ее переменной, соответственно hosting не работает, т.к. всплывает только декларация переменной (var), let/const  - срабатывает мертвая зона. Стрелочные функции используются только в виде FE

    const geo = function (parameters) {
    // code
    };

    //  Параметры - локальные переменные функции. Аргументы - переданные в функцию значения.

    function sum (a, b){   // параметры
        return a + b;
    }

    sum(3, 5);    // аргументы

// вызов 'вложенной функции'

    function funcInFunc ( x, y){
        return function (a) {

            return x + y + a;
        }
}

    funcInFunc( 3, 6) (8);  // 17


// IIFE = imediately evoked function expression



