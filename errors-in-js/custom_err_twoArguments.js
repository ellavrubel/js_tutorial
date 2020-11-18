'use strict';

// example with two arguments   при создании кастомного случая ошибки аргументов может быть сколько угодно и любого типа

// ready to use error function написать один раз и далее можно использовать по коду

function ValidationError (message, errorCode) {

  this.name = 'ValidationError';
  this.message = message;
  this.errorCode = errorCode;
  this.stack = new Error().stack;

}

ValidationError.prototype = new Error();


function multiply (a, b) {

  if (typeof a !== 'number'){

    throw new ValidationError(`'a' must be a number`, 1); // сообщение может показываться пользователю, а код ошибки для разработчика, чтобы работать с ней, напр подсветить ее др цветом
  }

  if (typeof b !== 'number'){

    throw new ValidationError(`'b' must be a number`, 2);
  }

  return a * b;
}

try{
  multiply(4, 'UU');
} catch (e) {
  console.log(e.name);   // ValidationError
  console.log(e.message); // 'b' must be a number
  console.log(e.errorCode); // 2
}
