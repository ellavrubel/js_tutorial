

     const month = ['April', 'June', 'March']; // литерал массива
     const monthLength = month.length;

     console.log(month);
     console.log(monthLength);

     //

     const neo = new Array(5); // конструктор массива

     const neoLength = neo.length;

     console.log(neo);
     console.log(neoLength);

     //
     const a = new Array(5.5);

     const aLength = a.length;

     console.log(a); // RangeError: Invalid array length
     console.log(aLength);

     //

     const v = new Array(void 0); // undefined
     console.log(v);

     //


     //     ES5 Duck typing проверка массива

     const m = ['June', 'July', 'March'];

     if (typeof m === 'object' && m.splice){

         console.log('-> This is an array!');

     }

     // но

     const mo = {

         0: 'june',
         1: 'July',
         2: 'December',
         length: 3,
         splice: function () {},
     };

         if (typeof mo === 'object' && mo.splice){
             console.log('-> This is another array!'); // ложный результат
     }

    // поэтому правильная проверка, кот доступна только в ES6

     const rio = ['June', 'July', 'March'];
     const rio2 = {

         0: 'june',
         1: 'July',
         2: 'December',
         length: 3,
         splice: function () {},
     };

     console.log(Array.isArray(rio)); // true
     console.log(Array.isArray(rio2)); // false

//

//     ES5
     const newA = new Array('June', 'July', 'March');

//     ES 6
     const anotherArray = Array.of ('June', 'July', 'March');

//  способ создания массива из массиво-подобных объектов

     const ar = Array.from({
         0: 'june',
         1: 'July',
         2: 'December',
         length: 3,
     });
     console.log(ar); // [ 'june', 'July', 'December' ]

console.log(ar.length);  // 3

     const strArray = Array.from('ELLA');
        console.log(strArray); // [ 'E', 'L', 'L', 'A' ]
        console.log(strArray.length); //  4


     const yu = Array.from({
         0: 'june',
         1: 'July',
         2: 'December',
         length: 2,
     });
     console.log(yu); // [ 'june', 'July']

     console.log(yu.length);  // 2

//

//     получение первого и последнего элемента массива

     const firstElement = yu[0];
     const lastElement = yu [yu.length - 1];

//

//     все, что не является валидным индексом массива, создает его свойство - некая мета - информация

     strArray [-1] = 'Olga';
     strArray ['date'] = new Date();

     console.log(strArray);

//

//     обрезка массива - BAD PRACTICE!

     strArray.length = 3;
     console.log(strArray); // ["E", "L", "L", -1: "Olga"]

     strArray.length = 5;
     console.log(strArray); // ["E", "L", "L", empty × 2, -1: "Olga"]
//

//     в итоге - 2 переменные и 1 массив, т.к. вторая переменная не копирует массив, а только на него ссылается

     const io = ['E', 'L', 'L'];
     const io2 = io;

//

