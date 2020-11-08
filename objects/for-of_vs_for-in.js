        'use strict';

        // BAD PRACTICE испотзовать for-in для массива

        const numbers = [1, 3, 60];

        for (const i in numbers){
          console.log(`${i}: ${numbers[i]}`);
        }

        // 0: 1
        // 1: 3
        // 2: 60

        //  for-in не выведет пустой элемент массива

        const numArray = [9,  , 56];

        for (const x in numArray){
          console.log(`${x}: ${numArray[x]}`);

          // 0: 9
          // 2: 56

        }

        // хотя

        console.log(`Длина массива: ${numArray.length}`); // Длина массива: 3


//         использование for-of в массиве корректно, т.к. цикл учитывает все, даже пустые элементы массива

        const userArray = ['Ball',   , 34];

        for(const value of userArray){
          console.log(value);

          // Ball
          // undefined
          // 34

        }


//        for -of относительно строки

        const greeting = 'Hello, You!';

        for (const value of greeting){
          console.log(value);

          // H
          // e
          // l
          // l
          // o
          // ,
          //
          // Y
          // o
          // u
          // !

        }

//        for-of не работает с объектами, но можно использовать Object.values() кот возвращает массив, кот в свою очередь уже можно перебрать через for-of

        const exampleObj = {
          a: 'someString',
          b: 34,
          c: 'anotherString'
        }

        for (const value of exampleObj){
          console.log(value);  // TypeError: exampleObj is not iterable

        }

//        но

        const exampleObj2 = {
          a: 'someString',
          b: 34,
          c: 'anotherString'
        }

        const objToArray = Object.values(exampleObj2);  // [ 'someString', 34, 'anotherString' ] возвращает значение свойств объекта в виде массива


        for (const value of exampleObj2){
          console.log(value);     // someString
                                  // 34
                                  // anotherString
        }

//

//        Object.keys в цикле for -of возвращает

        const exampleObj3 = {
          a: 'someString',
          b: 34,
          c: 'anotherString'
        }

        const objToArray2 = Object.keys(exampleObj3);  // [ 'a', 'b', 'c' ]  возвращает ключи объекта в виде массива


        for (const key of objToArray2){
          console.log(key);

          // a
          // b
          // c

        }

//        Object.entries() возвращает каждую пару (ключ, значение) объекта в виде отдельного мини-массива в общем массиве

        const person23 = {
          name: 'Vlad',
          age: 40,
          eyeColor: 'blue',
          height: 180
        }

        const person23Array = Object.entries(person23);
        console.log(person23Array);
                                    // [ [ 'name', 'Vlad' ],
                                    //   [ 'age', 40 ],
                                    //   [ 'eyeColor', 'blue' ],
                                    //   [ 'height', 180 ] ]

        for (const entries of person23Array){
          console.log(`key: ${entries[0]}`);
          console.log(`value: ${entries[1]}`);

          // key: name
          // value: Vlad

          // key: age
          // value: 40

          // key: eyeColor
          // value: blue

          // key: height
          // value: 180


        }




