
'use strict';

    // Напишите функцию join которая в качестве параметров будет принимать
    // неограниченное количество аргументов и возвращать строку разделённую пробелами.
    // 1. Если в функцию не передавались аргументы, функция должна вернуть null;

    // 2. Пустая строка должна игнорироваться;
    // 3. Строка состоящая только из пробелов должна игнорироваться;
    // 4. Пробелы вначале и в конце строки нужно удалять;
    // 5. Любое переданное значение которое не является строкой должно игнорироваться;




   const joinFunc = function (...args) {
        if (args.length === 0){
          return null;
        }

        let array = args.filter(function(string){

         if (typeof string === 'string' && string !== '' && string.replace(/\s/g, '').length){

           return string;
         }

        }).map(function(string){
          return string.trim()
        })

     return array.join(' ');
   }

   let s = joinFunc( 98, '         Olga          ', '', 'is','my', '      ', '   name!  ');
   console.log(s);  // Olga is my name!
