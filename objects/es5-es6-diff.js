 'use strict';


  const user = {
    // color: 'red',
    age: 30,
    color: 'green'    // 2 свойства с одинаковым именем в ES5 вызывет ошибку
  };

  console.log(user.color);  // green // в ES6 - свойство накладывается нижнее на верхнее

 //

 // порядок свойств объекта

 const numbers = {
   a: 1,
   9: 'user',
   c: 34,
   6: 'Tanya',
   b: 'special',
   1: 'auto'
 };

 console.log(Object.getOwnPropertyNames(numbers)); // [ '1', '6', '9', 'a', 'c', 'b' ] в ES6 на первые позиции идут числа, выстраиваются по порядку

//  создание объектов

// литерал

  const truew = {
    flore: 'Idioma',
    size: 54
  };   // { flore: 'Idioma', size: 54 }

 console.log(truew.toString()); // [object Object]


 // конструктор

  const dedo = new Object({
    name:'Tolasg',
    color: 'pink'
  });     // { name: 'Tolasg', color: 'pink' }

 console.log(dedo.toString());  // [object Object]


 // Object.create

  const objSAR = Object.create(null, {
    name: {
      value: 'Ella',
      firstName: null,
      lastName: null,
      fullName () {

        return this.firstName + ' ' + this.lastName;
      }
    }
  });   // [Object: null prototype] {}

 console.log(objSAR.toString()); // TypeError: objSAR.toString is not a function  т.к. отсутствует родитель, отсутствует метод toString()



 console.log(truew, dedo, objSAR);



 // cоздание объектов при помощи функций

 // ES5

    function createNewPerson (name, age) {

      return {
        name: name,
        age: age
      }
    }

    console.log(createNewPerson('Rodeon', 45)); // { name: 'Rodeon', age: 45 }



 // ES6

 const createNewObject = (name, age) => ({name, age});

 console.log(createNewObject("Ella", '38'));   // { name: 'Ella', age: '38' }


//  запись вычисляемых свойств объекта

  const car = {

    name: null,
    [2**4]: 'вычисляемое свойство'
  }
console.log(car); // { '16': 'вычисляемое свойство', name: null }





