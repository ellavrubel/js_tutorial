
 const testFunc = function namedFunc() {

  console.log(typeof testFunc);  // function
  console.log(typeof namedFunc);  // function

 }

  namedFunc(); // ReferenceError: namedFunc is not defined

  testFunc();

  // named function expression применяется в основном для рекурсии, название функции (namedFunc) используется как локальная переменная, кот не видно за пределами функции