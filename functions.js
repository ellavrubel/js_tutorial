// 'use strict';
//
//     // function declaration FD
//
//     testFunc();  // вызов функции при помощи ()
//
//     function testFunc (parameters) {  // function declaration - создается при помощи function (литерал), обязательно имеет имя, может быть вызвана в любом месте кода (до/после ее фактического написания (hosting), но вызов функции до ее объявления - bad practice!
//     // code
//     }
//     console.log(typeof testFunc); // function
//
//     // все что внутри {}  - лексическое окружение функции (lexical environment)
//
//
//     // function expression (FE) фунция как часть какого-либо выражения, например присвоение ее переменной, соответственно hosting не работает, т.к. всплывает только декларация переменной (var), let/const  - срабатывает мертвая зона. Стрелочные функции используются только в виде FE
//
//     const geo = function (parameters) {
//     // code
//     };
//
//     //  Параметры - локальные переменные функции. Аргументы - переданные в функцию значения.
//
//     function sum (a, b){   // параметры
//         return a + b;
//     }
//
//     sum(3, 5);    // аргументы
//
// // вызов 'вложенной функции'
//
//     function funcInFunc ( x, y){
//         return function (a) {
//
//             return x + y + a;
//         }
// }
//
//     funcInFunc( 3, 6) (8);  // 17
//
//
// // IIFE = immediately invoked function expression  вызывается сразу, в момент создания. Используются в основном для создания закрытых областей видимости
//
//     (function iiFe( a, d) {
//         console.log(a + d);  // 13
//     }) (6, 7);
//
// // callback functions  вызывается только после того, как другая функция завершила свое выполнение. Другое название - функция обратного вызова.
//
//     const getResult = function (result) {
//         console.log(result)
//
//     };
//
//     const ddf = function (a, b, callback) {
//             const result = a + b;
//
//             callback(result);
//     };
//
//     ddf (1, 2, getResult); // 3
//
// // arguments     обьект, кот содержит все аргументы, переданные в функцию  существует только внутри функции. Основное применение - работа с аргументами, когда неизвестно их точное количество
//
//
//
//     function sumAll() {
//
//         let sum = 0;
//
//             for (let i = 0; i < arguments.length; i++) {
//                 if(typeof arguments[i] === 'number') {
//                     sum += arguments[i];
//                 }
//             }
//
//         return sum;
//     }
//
//     const aSum = sumAll( 3, 5, 10, 456, null, 'string', undefined, 1, 4);
//     console.log(aSum);
//
//     function f() {
//         console.log(arguments);  //[Arguments] { '0': 1, '1': 2 }
//     }
//
//     f(1,2);
//
//
// //     return   ES5 необходимо писать return иначе результатов функции будет undefined
//
//     function myFunc( f, g) {
//         const res = f + g;
//
//         return res;
//
//     //      console.log(1) unreachable code - все что после return не выполняется и никакой смысловой нагрузки не несет
//     }
//
//     const result2 = myFunc(3,4);
//     console.log(result2);  // undefined  при добавлении return  в коде, получаем 7
//
//
// // проверка, передана функция или нет
//
//     function ffT (){}
//     console.log(typeof ffT === 'function'); // true
//
// // переиспользование функции
//
//     function triple (name) {
//         console.log(`Hello, ${name}!`);
//     }
//
//     triple('Olga');  //    Hello, Olga!
//     triple('Ella');  //    Hello, Ella!
//     triple('Bella'); //    Hello, Bella!
//
//
//     function triple2 (name) {
//
//         if (typeof name !== 'string') {
//             throw new Error('Name is not a string!')
//         }
//
//         console.log(`Hello, ${name}!`);
//     }
//
//     triple2('Olga');  // Hello, Olga!
//     triple2(333);     // Uncaught Error: Name is not a string!
//     triple2('Bella');  // сюда код не дошел
//
// // валидация кода
//
//         function sFunc(a, b) {
//
//             // валидация кода
//             if (typeof a !== 'number' || typeof b !== 'number'){
//                 throw new Error('All parameters should have a number type!')
//             }
//
//             return a * b;
//         }
//
//         const r1 = sFunc(12, 2);
//         console.log(r1);
//
//         const r2 = sFunc('Den', 4);
//         console.log(r2);  //  throw new Error('All parameters should have a number type!')
//
//
// // у функции есть свойство - length и она равна количеству переданных аргументов
//
//  function lang(param1, param2, param3) {
//      console.log('param1', param1); // 234
//      console.log('param2', param2); // 45
//      console.log('param3', param3); // 678
//      console.log('length', lang.length); // length 3
//      console.log('arguments', arguments.length); // arguments 3
//  }
//     lang(234, 45, 678);
//
// // все переменные и параметры функции являются локальными переменными и за пределами функции не видны!
//
//  function variables(y, x) {
//
//      var e = 1;
//      const n = 4;
//      let u = 'Helo!'
//  }
//     console.log(y); // ReferenceError: y is not defined
//     console.log(x); // ReferenceError: x is not defined
//     console.log(e); // ReferenceError: e is not defined
//     console.log(n); // ReferenceError: n is not defined
//     console.log(u); // ReferenceError: u is not defined
//
// // глобальные переменные доступны в функции
//
//     let fName = 'John';
//
//     function sayHello() {
//
//         const message = `Hello, ${fName}!`;
//         console.log(message);
//
//     }
//     sayHello(); // Hello, John!
//
//     fName = 'Olga';
//
//     sayHello(); // Hello, Olga!
//
// // ES6 arrow functions существуют только в виде FE
//
//     const arFunc = name => {  // если один параметр ()- не нужны, если нет параметров или более одного () - обязательны
//         const f = `Hello, ${name}!`;
//         console.log(f)
//     };
//
//     arFunc('Gregory'); // Hello, Gregory!
//
// // т.к. нет return след запись даст undefined
//     const e = arFunc('Gregory');
//     console.log(e); // undefined

   const exampleArrowFunc = (q, w) => {
       return q + w;
   };
   console.log(exampleArrowFunc(3,5)); // 8

// простая стрелочная ф (+ === - *  и пр. простые операции)  - можно не писать return, тогда не нужны фигурные скобки, код отработает как с return

 const withoutReturn = (a, b) => a + b;
 console.log(withoutReturn(1,1)); // 2

// часто встречаемый код для форматирования объекта; функция, возвращающая объект

    const getUser = (first, last) => ({fName: first, lName: last}); // когда фигурные скобки обернуты в круглые, js понимает это как возврат объекта
    console.log(getUser('Olga', 'Fedorova')); // {fName: "Olga", lName: "Fedorova"}


// функция в функции

    function funcInFunc(a) {

        return function (x) {

            return a * x;
        }
    }

    const double = funcInFunc(2);
    const triple = funcInFunc(3);

    console.log (double(3)); // 6
    console.log (triple(4)); // 12

// или можно вызвать еще так

   console.log(funcInFunc(2)(3));
   console.log(funcInFunc(2)(4));

   // или вариант, когда внутренняя функция является стрелочной

    function outerFunc(a) {

        return b => {

            return a * b;
        }
    }

    console.log(outerFunc(5)(5)); // 25