 // // debugging
 //
 // // node --inspect-brk <script name>
 //
 // const month = ['june', 'July', 'December'];
 //
 // for (let i = 0; i < 4; i++){
 //     let num = month[i];
 //
 //     // debugger;
 //
 // }
 //
 // // при необходимости проинспектировать др значения
 //
 // const names = ['Olya', 'Julya', 'Darina'];
 //
 // for (let x = 0; x < 4; x++){
 //     let count = names[x];
 //
 //     // debugger;
 //
 //     const str = count.toUpperCase();
 //
 //     // debugger;
 // }
 //
 // //

 // режим паузы дебага в браузере, подсвечиваеит сразу место ошибки

  for (let s = 0; s < 5; s++) {

      if (s === 3) {
          throw new Error('Boom!');
      }
  }

