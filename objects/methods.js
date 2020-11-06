'use strict';



//    const obj = {
//
//       a: 1,
//       c: 3,
//       internal: 2
//    }
//
//    Object.defineProperty(obj, 'internal', {
//
//      enumerable: false
//
//    });
//
//   console.log(Object.keys(obj));  // [ 'a', 'c' ]  возвращает все перечислимые свойства
//
//    console.log(Object.getOwnPropertyNames(obj));   // [ 'a', 'c', 'internal' ]  возвращает все собственные свойства
//
//
// //   Object.preventExtensions
//
//    const user = {
//
//      name: 'Tonya'
//    };
//
//    Object.preventExtensions(user);
//
//    user.age = 30;
//    user.height = 168;
//
//    console.log(Object.isExtensible(user));  // false
//
//    console.log(user.age);                   // undefined   если 'use strict' - TypeError: Cannot add property age, object is not extensible
//
//    console.log(user.height);                // undefined      если 'use strict' - TypeError: Cannot add property age, object is not extensible


//

  const x = {

    color: 'red'
  }

  Object.preventExtensions(1);  // 1 - ES6  //   TypeError: 1 is not an object // код ES5

//

//   seal() - запрещает удалять свойства из объекта

   const testObj = {
     name: 'TTT',
     age: 34
   }
   Object.seal(testObj);

   // delete testObj.age;   // TypeError: Cannot delete property 'age' of #<Object>

    testObj.name = 'III';
    console.log(testObj.name);  // перезаписать можно



// freeze() - замораживает объект полностью

    const ball = {
      name: 'basket',
      form: 'round',
      size: '55sm'
    };

    Object.freeze(ball);

    // ball.name = 'Ella';
    // console.log(ball.name);  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    //
    //  delete ball.form;  // TypeError: Cannot delete property 'form' of #<Object>

console.log(Object.isFrozen(ball));  // true
console.log(Object.isFrozen(testObj));  // false

//  проверка в коде на "замороженность" объекта

  if (Object.isFrozen(ball)){
    console.log('Объект заморожен!');
  }  else {
    ball.color = 'green';
  }

// Объект заморожен!














