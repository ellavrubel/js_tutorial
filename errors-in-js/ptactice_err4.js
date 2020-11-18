'use strict';

// TypeError

try{

  throw new TypeError('Недопустимая операция.')
} catch (e) {
  console.log(e.name);    // TypeError
  console.log(e.message); // Недопустимая операция.
}


// SyntaxError


try {

  throw new SyntaxError('Ошибка синтаксиса!');
} catch (e) {
  console.log(e.name);   // SyntaxError
  console.log(e.message); // Ошибка синтаксиса!
}


// ReferenceError

try{

  throw new ReferenceError('Несуществующая ссылка!');
} catch (e) {
    console.log(e.name);   // ReferenceError
  console.log(e.message);  // Несуществующая ссылка!
}


// RangeError

const func = () => {
  func();
}

try {
  func();
} catch (e) {
  console.log(e.name);   // RangeError
  console.log(e.message); // Maximum call stack size exceeded
}