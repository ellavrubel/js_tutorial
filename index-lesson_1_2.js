    // 'use strict'; влияет на весь документ, перед ним могут быть только комментарии


        const greetings = 'Hello, it is me!';

        console.log(greetings);



    //    use strict in function

        function sum(a, b) {
            'use strict';

            return (a + b);

        }
    //

        console.log(sum (4,5));

        d = 3 + 4;
        console.log(d);

        // hosting

        console.log(age); // undefind
        var age = 10;

        console.log(age2); // ReferenceError
        const age2 = 10; // let works the same

    // TDZ -  temporal dead zone

    if (true){
        console.log(typeof value);

        let value = 1;
    }

    //


    const firstName = 'Ella'; // Camel Case
    const last_name = 'Vrubel'; // snake_case


//    при сложении дробных чисел

    const s = 0.1;
    const y = 0.2;

    const summer = s + y;
    console.log(summer); // 0.30000000000000004

//    чтобы этого избежать

    const num1 = 0.1;
    const num2 = 0.2;

    const result = (num1 * 10 + num2 * 10) / 10;
    console.log(result);



    // boolean

    const test = Boolean(false); // false
//

//    склеивание строк в ES6

    const fN = 'Olga';
    const lN = 'Fedorova';

    const fullN = `Ms. ${fN} ${lN}`;
    console.log(fullN);

//


    let G = 1;

    console.log(++G); // 2
    console.log(G++); // 2
    console.log(G);   // 3


//    if - else if -else if

    if (3 > 8){
        console.log('Horray!');
    } else {
        console.log('False');
    }



    if ( 5 > 9){
        console.log('case 1');
    } else if (3 < 10) {  // возможность указать еще одно условие
        console.log('case 2');
    } else {
        console.log('Nothing is working');
    }

//

//    тернарный оператор

    const year = 16;
    const store = year >= 18 ? true : false;

    if (store) {
        console.log('open');
    } else {
        console.log('closed');
    }

//    альтернативный вариант записи

//     if (store) {
//         return console.log('open'); // return  прерывает выполнение кода
//     }
    // console.log('close');


//

//    Switch - case

    const dayNumber = 1;
    let day;

    switch (dayNumber) {
        case 1:
            day = 'Sunday';
            break;
        case 2:
            day = 'Monday';
            break;
        default:
            day = null;
    }

    console.log(day); // Sunday

//

//    вложенность

    const sirName = 'Vrubel';

    if (sirName){
        if (sirName === 'Fedorova'){
            console.log(sirName);
        } else {
            console.log('I do not know your sirName');
        }
    } else {
        console.log('Type error');
    }

//


