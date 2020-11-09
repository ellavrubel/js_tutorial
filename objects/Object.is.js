 'use strict';

 //  сравнение в js

 console.log(+0 === -0);  // true
 console.log(NaN === NaN); //false
 console.log(Number.isNaN(NaN) === Number.isNaN(NaN)); // true
 console.log(47 == '47');  // true  приведение типов
 console.log(47 === '47'); // false

 console.log(`\n ***********************************\n`);


// отличия сравнений в Object.is()

 console.log(Object.is(+0, -0));  // false
 console.log(Object.is(NaN, NaN));  // true
 console.log(Object.is(Number.isNaN(NaN), Number.isNaN(NaN))); //true
 console.log(Object.is(47, '47')); // Object.is работает как строгое равенство   // false
 console.log(Object.is(47, '47')); // alse




