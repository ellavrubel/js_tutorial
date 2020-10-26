
    // циклы работают только с var/let  const - не работает

    let i = 1;

    while (i < 5){
        console.log(i);  // 1 2 3 4
        i++;
    }

    let t = 0;
    const month = ['june', 'July', 'Feb', 'March'];

    while (month[t] !== 'Feb'){
        console.log(month[t]); // June July
        t++;
    }

    let h = 0;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    while (num[h]) {
        console.log(num[h]); // 1 2 3 4 5 6 7 8 9 10 и прекратит итеррации, т.к. 11 = false = undefined
        h++;
    }

    // обратная итеррация


    const rty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let e = rty.length - 1;

    while (rty[e]) {
        console.log(rty[e]); // 10 9 8 7 6 5 4 3 2 1
        e--;
    }


    const asd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const reverseAsd = [];

    let q = asd.length - 1;
    let w = 0;

    while (asd[q]) {

        reverseAsd[w] = asd[q];

        q--;
        w++;

        console.log(reverseAsd);  //
        // [10]
        // [10, 9]
        // [10, 9, 8]
        // [10, 9, 8, 7]
        // [10, 9, 8, 7, 6]
        // [10, 9, 8, 7, 6, 5]
        // [10, 9, 8, 7, 6, 5, 4]
        // [10, 9, 8, 7, 6, 5, 4, 3]
        // [10, 9, 8, 7, 6, 5, 4, 3, 2]
        // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

}

// do while

    const ar = [ 7, 2, 3, 4, 5, 6, 7, 8, 9, 31];
    let k = 0;

    do {
        console.log(ar[k]);
        k++
    }  while (ar[k] < 7);

//

//    for

    for (var po = 0; po < 5; po++) {
        console.log(po); // 0 1 2 3 4
    }

    console.log('after loop', po); //  var вне фунции имеет глобальную область видимости, ее видно за циклом


    for (var p = 0; p < 5; p++) {
        console.log(p);

        var p = 3; // бесконечный цикл var - использовать с отсторожностью

    }


    for (let test = 0; test < 5; test++) {
        console.log(test);
    }

    console.log('after loop', test); // ReferenceError: test is not defined      let не видно за пределами цикла



    for (let test2 = 0; test2 < 5; test2++) {

        let test2 = 7;

        console.log(test2); // 7 7 7 7 7  в данном случае к первой переменной test2 доступа нет
    }

    for (let xod = 0; xod < 5; xod++) {

        let xod2 = 7;

        console.log(xod, xod2); // к первой переменной xod доступ есть
          // 0 7
          // 1 7
          // 2 7
          // 3 7
          // 4 7
    }


    for (let ghj = 0; ghj < 8; ghj++ ){

        console.log(ghj);  //  ReferenceError: Cannot access 'ghj' before initialization

        let ghj = 7; // создается TDZ и поднятие переменной
    }



    // отфильтровать четные числа

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenArray = [];

    for (let u = 0; u < array.length; u++){
        if(array[u] % 2 === 0){
            evenArray[evenArray.length++] = array[u];
        }
    }

    console.log(array);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(evenArray); //   [2, 4, 6, 8, 10]

    //

//     DZ

    const dz = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const evenDz = [];

    for (let b = 0; b < dz.length; b++){

        if(dz[b] % 2 === 0){

            evenDz.push(dz[b]);

        }
    }

    console.log(dz);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(evenDz); // [ 12, 14, 16, 18, 20 ]

//


//     посчитать сумму все нечетных элементов

    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let oddSum = 0;

    for (let s = 0; s < allNumbers.length; s++){
        if(allNumbers[s] % 2 !== 0){

            oddSum += allNumbers[s];

        }
    }

    console.log(oddSum); // 25

//

//    подсчет числа букв в строке

    const str = 'The standard string class provides support for such objects with an interface similar to that of a standard container of bytes, but adding features specifically designed to operate with strings of single-byte characters.';

    let characters = 0;

    for (let c = 0; c < str.length; c++){
        characters += 1;
    }
    console.log(characters); // 220

    // const text = Array.from('The standard string class provides support for such objects with an interface similar to that of a standard container of bytes, but adding features specifically designed to operate with strings of single-byte characters.');
    //
    // let textLength = text.length;
    //
    // console.log(textLength);   альтернативный вариант посчета

// запись строки наоборот

    const ddt = 'The standard string class provides support for such objects with an interface similar to that of a standard container of bytes, but adding features specifically designed to operate with strings of single-byte characters.';

    let reverseString = '';

    for (let x = ddt.length -1; x >= 0; x--){
        reverseString += ddt[x];
    }

    console.log(reverseString); // .sretcarahc etyb-elgnis fo sgnirts htiw etarepo ot dengised yllacificeps serutaef gnidda tub ,setyb fo reniatnoc dradnats a fo taht ot ralimis ecafretni na htiw stcejbo hcus rof troppus sedivorp ssalc gnirts dradnats ehT

//

//    break

    for (let w = 0; w < 10; w++){
        if (w === 6){
            console.log('break');
            break;
        }

        console.log(w);
    }

//    continue

    for (let w2 = 0; w2 < 10; w2++){
        if (w2 === 6){
            console.log('Empty space instead');
            continue;
        }

        console.log(w2);
    }


// Label

    firstLoop: for (let f = 0; f < 5; f++){

        for (let y = 0; y < 5; y++){
            if (y === 4){
                continue firstLoop;
            }

            console.log(y ,f);
        }
    }


     for (let qwe = 0; qwe < 5; qwe++){

         secondLoop: for (let se = 0; se < 5; se++){
            if (se === 2){
                continue secondLoop;
            }

            console.log(qwe ,se);
        }
    }

//     infinity loops чаще считаются ошибками за искл случаев постоянного слежения за опред областью на предмет изменений

    while (true){
         console.log(new Date());
    }


     do {
         console.log(new Date());
     } while (true);


     for (;;){
         console.log(new Date());
     }

//






