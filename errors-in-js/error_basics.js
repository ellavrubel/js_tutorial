'use strict';


// генерируются ошибки при посмощи throw new Error
// основные виды ошибок

// EvalError - возникает при работе с функцией eval()   она довольно устаревшая и не рекомендуется ее использование
// RangeError - возникает при выходе за рамки каких-то диапазонов
// ReferenceError - ошибка ссылки на что-то несуществующее (переменная, объект и т.д.)
// SyntaxError - ошибка синтаксиса, кот js не может прочитать
// TypeError - возникает когда выполняется недопустимая в js операция, несмотря на правильность написания кода, например вызвать undefined как функцию
// URIError - возникает при работе с методами decode(), encodeURI()

// свойства ошибок

// message  - описание ошибки
// name     - имя ошибки
// stack    - stack trace показывает место в коде, где находится ошибка

// вывод ошибок в консоль - bad practice!

// создание экземпляра ошибки

// new Error((message));  // если нет ключевого слова throw, то выполнение кода не приостанавливается

// правильно делать так

const error = new Error('boom!');

console.log(error.name);
console.log(error.message);

//  плохая практика выбрасывать строку, т.к. строка не является ошибкой сама по себе

//                        try {
//                          //   code
//                                throw 'Booom!';
//                          //  code
//                        } catch (e){
//                             console.log(e);
//                        }

//

// правильно написание ошибки, использование блока try/catch/finally  - используется для перехвата и локализации ошибок в синхронном коде

try {   // tryCode - Block of code to try
//   code
  throw new Error('BA-BAHH!')
//   code

} catch (e) {   // Block of code to handle errors
  console.log(e);

} finally {     // Block of code to be executed regardless of the try / catch result
//   code
}

// Error: BA-BAHH!  // name + message
//   at Object.<anonymous> (/home/om/Desktop/Olya/progects/js/errors-in-js/error_basics.js:49:9)  //  stack

//

// throw new Error принимает один аргумент. Для того, чтобы добавить аргументы нужно:

const err = new Error ('Hello!');  // new Error - объект, в кот мы можем дописать любые свойства
err.myProperty = 'new argument for my error';

console.log(err.myProperty); // new argument for my error

// создание нового случая синтаксической ошибки

throw new SyntaxError ('There is a problem.');  // SyntaxError: There is a problem.

//


