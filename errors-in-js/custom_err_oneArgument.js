'use strict';

// example with one argument

// ready to use error function написать один раз и далее можно использовать по коду

function ValidationError (message) {

  this.name = 'ValidationError';
  this.message = message;
  this.stack = new Error().stack;

}

ValidationError.prototype = new Error(); // указание родителя обязательно

//


function sum (a, b) {

  if(typeof a !== 'number'){

    throw new ValidationError(`'a' must be a number!`);
  }

  if (typeof 'b' !== 'number'){

    throw new ValidationError(`'b' must be a number!`)
  }

  return a + b;
}

try {
  sum(3, 'Ella');
} catch (e) {             // так ошибка считается обработанной
  console.log(e.name);   // ValidationError
  console.log(e.message);  // 'b' must be a number!
}