'use strict';

  // Объект - набор свойств и методов. Свойство состоит - имя/значение (key/value).
  // Метод объекта - свойство, которое функция.

  // 3 способа создания объекта:

  const user = {};  // литерал 99% случаев

  const userConstructor = new Object();  // конструктор

  const userCreate = Object.create(Array.prototype, {});  // Object.create  1 - родитель объекта, 2 - сам объект  В итоге объект userCreator будет иметь доступ к методам родительского массива (напр, push())

  const user2 = Object.create(null, {}); // user2 - объект кот не наследует никаких свойств


//  доступ к свойству - через точку objectName.propertyName, реже objectName[propertyName] - когда имя свойства написано не через camelCase или snake_case

  const mainUser = {

    name: 'Ella'
  }
  console.log(mainUser.name); //Ella


//  запись свойства

  mainUser.age = 38;
  console.log(mainUser); // { name: 'Ella', age: 38 }

//  запись метода

  mainUser.getName = function () {};

  console.log(mainUser); // { name: 'Ella', age: 38, getName: [Function] }


//   перебирание свойств объекта

//  for .. in  - найдет и перечислит все собственные и родительские свойства объекта

//  Object.keys(user),

//  Object.getOwnPropertyNames(user  - найдет и перечислит только все собственные свойства объекта и вернет их в виде массива

  let x = Object.keys(mainUser);
  console.log(x);  // [ 'name', 'age', 'getName' ]

  let y = Object.getOwnPropertyNames(mainUser);
  console.log(y);   // [ 'name', 'age', 'getName' ]


//  2 спец метода объекта - используются для прописывания большей логики, добавления валидаторов

   // get - при срабатывании метода - извлекаем из объекта значение определенного свойства

   //  set - присваивает значение определенному свойству

  const user3 = {

   get fullName (){

     return this.name;
   },

   set fullName(value){

     this.name = value;
  }

  }

  user3.fullName = 'Olga';  // при присваивании автоматически срабатывает setter
  console.log(user3.fullName); // Olga    - при извлечении - getter

//   удаление свойства

  const myObj = {

    name: 'Jone',
    age: 56
  }

  delete myObj.age;  // также удаляется элемент из массива, длина его не поменяется и он окажется "с дыркой"  оператор delete - пользоваться редко, в необход случаях Чаще для удаления ненужных свойств собирают новый обьект из старого путем копирования Например assign() - клонирует объект

  console.log(myObj.age); // всегда undefined, а не ошибка

//

//  error будет если обратиться к свойствам пустого объекта, кот находятся 'за undefined'

  const testObj = {

    // name: {
    //   first: 'Ellis'
    // }

  };


  // console.log(testObj.name. first); // TypeError: Cannot read property 'first' of undefined

//  доступ к элементам массива внутри объекта

  const ob = {

    scores: [1, 2, 3, 6],
    name: 'Eliot'

  }

  console.log(ob.scores[2]);  // 3

  //

  const your = {

    friends:[{name: 'Ylia'}, {name: 'Natali'}]

  }
  
  console.log(your.friends[1].name); // Natali
//

//  Object.defineProperty - создание свойства, в кот самостоятельно нужно прописать значения

//  writable      - влияет на то, можно ли перезаписать value объекта
//  configurable  - влияет на то, можно ли удалить свойство из объекта
//  enumerable    - свойство/метод физически присутствует в объекте, но для Object.keys и для for..in он не виден. Для getOwnPropertyNames - виден

//   как false, т.к default - true  Несмотря на то, что метод перезаписывает дефолтные значения на false, нужно прописать это вручную

  const person = {};

  Object.defineProperty(person, 'name', {

    value: 'Rick',
    writable: false,
    configurable: false

  })

  console.log(person); // {}
  console.log(person.name); // Rick

  person.name = 'Ella'; // строка игнорируется

  console.log(person.name); // Rick,  а если 'use strict' - TypeError: Cannot assign to read only property 'name' of object '#<Object>'
















