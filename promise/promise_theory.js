'use strict';

// producing code - it takes some time
// consuming code - it must wait for the result
// promise - is an object that links producing and consuming codes

// Promise object contains both - the producing code and calls to the consuming code, like this

const myFirstPromise = new Promise(function (resolve, reject) {  // always function with (resolve, reject)

//   producing code that can take some time


  resolve(); // when success
  reject();  // when error

});

myFirstPromise.then(    // вторая обязательная часть промиса - consuming code that waits for the fulfilled promise,  содержит 2 параметра, кот опциональны, можно указать только что-то одно

  function (value) {
    // if there is a success
  } ,
    function (error) {
    // if there is an error
    }
);

// после получение результата от первой части промиса (producing code) далее запускается соответствующая callback f из второй части промиса (consuming code)

// объект промиса содержит 2 свойства - state/ result and can be in 1 of the 3 states

// state - pending(working) - result - undefined;
// state - fulfilled   result - value
// state - rejected    result - error (object)

// There is no access to state or result!