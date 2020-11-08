'use strict';



// проверка является ли свойство перечисляемым/ enumerable

  const user = {
    name: 'Ella'
  };

  console.log(user.propertyIsEnumerable('name')); // true

//

// цикл for-in -итерирует все перечисляемые свойства объекта и оптимально подходит для этого. Неправильно применять for-in для работы с массивами

    const fish = {

      name: 'karp',
      size: 'big'
    };

    for (const key in fish){

      console.log(`${key}: ${fish[key]}`);
      // name: karp
      // size: big
    }

//    for-in итерирует также по свойствам родителя   Часто, для отфильтрации союственных свойств объекта применяется метод .hasOwnProperty()


    const parentObj = {
      color:'blue'
    };

    const childObj = {
      name: 'Olga',
      age: '38',
      __proto__: parentObj
    };

  for (const key in childObj) {
    if (childObj.hasOwnProperty(key)) {
      console.log(`содержит собственное свойство: ${key}`);

    } else {
      console.log(`это свойство заимствовано от родителя: ${key}`);
    }
  }

//  var - доступен за пределами цикла
// let/const - нет


