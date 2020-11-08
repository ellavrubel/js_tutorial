'use strict';


//   for-of появился только в ES6 выполняет обход только итерируемых объектов:
//   String, Array, Map/ Set (структуры данных), arguments...
//   если итерировать массив через for -in возвратятся индексы, а for-of - вернет значения
//   с объектами НЕ РАБОТАЕТ!

 const myArray = ['Ella', 34, 'You'];

 for (const value of myArray){
   console.log(value);
   // Ella
   // 34
   // You

 }

 // использование for-of для итерации arguments

    (function loop () {

       for (const argument of arguments ){
         console.log(argument);
       }

    })('Olga', 'Ella');
                          // Olga
                          // Ella

//
