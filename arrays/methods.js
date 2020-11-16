'use strict';

// наиболее часто используемые по состоянию 2019 - 2020
// push(), pop(), map(), splice(), reduce(), filter(), shift(), unshift(), sort()

// практически все методы массива в кач аргумента могут принимть функцию, которая будет callback

// свойство массива length - устанавливает или возвращает длину массива

const fr = ['apple', 'peach'];
console.log(fr.length);     // 2

//

// splice() - МУТИРУЕТ массив, добавляя и убирая из него элементы

const colors = ['green', 'red', 'blue' ];
colors.splice(0, 2, 'passport');
console.log(colors);                       // [ 'passport', 'blue' ]

console.log(colors.splice(1, 1)); // вырезает и возвращает вырезанное

// splice - единственный метод, позволяющий что-то вставить в середину массива
colors.splice(-1, 0, 'orange', 'table' );
console.log(colors);                      // [ 'green', 'red', 'orange', 'table', 'blue' ]


// slice() - массив НЕ МУТИРУЕТ, используется для копирования массива и создания нового на основе скорированных элементов. Если метод вызывается без аргументов - создает точную копию массива

const year = ['june', 'july', 'october', 'december'];
const copiedArray = year.slice(0, 2)  // первый индекс включен, последний - нет
const x = year.slice(-2, -1);         // [ 'october' ]

console.log(copiedArray);             // [ 'june', 'july' ]
console.log(x);




// sort() - строки сортирует по алфавиту, числа - по порядку, но видит их как строки, поэтому сортирует некоррктно. Для кастомной сортировки можно передать функцию как аргумент - это будет callback

const sorted = [3,5,6,7,8,10];
const numbers = ['2', '4', '5'];

console.log(sorted.sort());   // [ 10, 3, 5, 6, 7, 8 ]
console.log(numbers.sort());  // [ '2', '4', '5' ]

const points = [40, 100, 1, 5, 25, 10];
const a = points.sort((a,b) => a - b);  // сортирует числа по порядку
console.log(a);                                      // [ 1, 5, 10, 25, 40, 100 ]



// reverse() - переворачивает массив задом наперед

const arr = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
const reversed = arr.reverse();
console.log(reversed);          // новый массив  [ 'noodles', 'hummus', 'cheese', 'milk', 'bread' ]



// concat() - сoздает новый массив, соединяя уже существующий (щие) и элементы, переданные как аргументы

const first = [ 10, 3, 5, 6, 7, 8 ];
const second = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

const mix = first.concat(second, 'Ella');

console.log(mix);  // [ 10,3,5,6,7,8,'bread','milk','cheese','hummus','noodles','Ella']  все добавляется в конец

// indexOf(), lastIndexOf() - возвращает первый и последний индекс искомого элелемента соответственно


// forEach() вызывает переданную функцию для каждого элемента массива по порядку. Функция не вызовется, если в ней нет ни одного аргумента.

const elements = ["apple", "orange", "cherry"];

elements.forEach((item, index, array)=> {  // index, array - опциональные аргументы

  console.log(`current item`, item);
  console.log(`it's index`, index);
  console.log(`array`, array);

});

const math = [1,2,3,4,5,6,7,8,8,9,10];

math.forEach((item, index) => console.log(math[index] = item * 10));
console.log(math);  // [10, 20, 30, 40, 50, 60, 70, 80, 80, 90, 100]  массив преобразовался после forEach()

// forEach() сам по себе ничего не возвращает


// filter () переданный callback обязательно возвращает true/false  true - элемент попадает в новый массив, false - нет   возвращает новый массив!

const data = [-2, 4, 6, -45];

const filtered = data.filter((item, i, array) => item > 0);
console.log(filtered);  // [ 4, 6 ]


// map()   в противовес forEach() возвращает новый массив с измененными элементами

const testMap = [78, 34, -34, 5, -2, 78, 56];

const mapped = testMap.map((item, i, arr) => item * 2);
console.log(mapped);    // [ 156, 68, -68, 10, -4, 156, 112 ]


const names = ['HTML', 'CSS', "JavaScript"];

const newNames = names.map(name => {

  let updated = name;

  if(name.length > 3){
    updated = name.toLowerCase();
  }

  return  updated;
})

console.log(`mutated:`, newNames); // mutated: [ 'html', 'CSS', 'javascript' ]

















