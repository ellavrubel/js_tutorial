
'use strict';

    // Напишите функцию join которая в качестве параметров будет принимать
    // неограниченное количество аргументов и возвращать строку разделённую пробелами.


    // 1. Если в функцию не передавались аргументы, функция должна вернуть null;
    // 2. Пустая строка должна игнорироваться;
    // 3. Строка состоящая только из пробелов должна игнорироваться;
    // 4. Пробелы вначале и в конце строки нужно удалять;
    // 5. Любое переданное значение которое не является строкой должно игнорироваться;




function joinFunc (...args) {

  if (arguments.length === 0){
    return null;
  }

  let argsArray = [];

  for (let i = 0; i < arguments.length; i++) {
    argsArray[i] = arguments[i];
  }

    if (argsArray[] === null && (!argsArray[].replace(/\s/g, '').length) && typeof argsArray[] !== 'string') {

      return false;

    } else {

      const resArray = argsArray.map(el => el.trim());

      resArray.join( );

    }

    return argsArray.join ( );



}

const res = joinFunc('Olga', 'is ', '   ', '', 'my', 34, 'name!');
console.log(res);