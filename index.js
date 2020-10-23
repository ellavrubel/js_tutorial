     //
     //
     // const month = ['April', 'June', 'March']; // литерал массива
     // const monthLength = month.length;
     //
     // console.log(month);
     // console.log(monthLength);
     //
     // //
     //
     // const neo = new Array(5); // конструктор массива
     //
     // const neoLength = neo.length;
     //
     // console.log(neo);
     // console.log(neoLength);
     //
     // //
     // const a = new Array(5.5);
     //
     // const aLength = a.length;
     //
     // console.log(a); // RangeError: Invalid array length
     // console.log(aLength);
     //
     // //

//     ES5 Duck typing проверка массива

     const m = ['June', 'July', 'March'];

     if (typeof m === 'object' && m.splice){

         console.log('-> This is an array!');

     }

