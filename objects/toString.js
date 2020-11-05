'use strict';



  const user = {

    firstName: 'Ulia'
  }

  console.log(user); // { firstName: 'Ulia' }
  console.log(user.toString()); // [object Object]

  // если создать вручную метод toString() - переопределить существующий глобальный метод, тогда выводится нужная информация

  const userToString = {

    name: 'Anna',
    toString: function () {
      return userToString.name;

    }
  }

  console.log(userToString.toString()); // Anna

//  пример enumerable - false

  const user2 = {
    name: 'Ivan',
    toString: function () {

      return this.name
    }
  }

  Object.defineProperty(user2, 'toString', {

    enumerable: false

  })

  console.log(Object.keys(user2)); // [ 'name' ]
  console.log(user2);              // { name: 'Ivan' }
  console.log(user2.toString());   // Ivan



