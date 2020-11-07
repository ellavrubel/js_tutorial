 'use strict';

 //  сравнение в js

 console.log(+0 === -0);  // true
 console.log(NaN === NaN); //false
 console.log(Number.isNaN(NaN) === Number.isNaN(NaN)); // true
 console.log(47 == '47');  // true  приведение типов
 console.log(47 === '47'); // false

 console.log(`\n ***********************************\n`);


// отличия сравнений в Object.is()

 console.log(+0 === -0, Object.is(+0, -0));  // true false
 console.log(NaN === NaN, Object.is(NaN, NaN));  // false true
 console.log(Number.isNaN(NaN) === Number.isNaN(NaN), Object.is(Number.isNaN(NaN), Number.isNaN(NaN))); // true true
 console.log(47 == '47', Object.is(47, '47')); // Object.is работает как строгое равенство   // true false
 console.log(47 === '47', Object.is(47, '47')); // false false




