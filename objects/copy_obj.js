'use strict';

  // ES5 way

  const mixin = (receiver, supplier) => {
    Object
      .keys(supplier)
      .forEach(key => {
        receiver[key] = supplier[key];

      });

    return receiver;
  };

  const emitter = {
    emit: value => console.log(value || 'emitted'),
    color: 'blue'
  };

  const user = {};

  mixin(user, emitter);

  console.log(user); // { emit: [Function: emit], color: 'blue' }
  console.log(user.emit('Hello!'));  // Hello!

//
//  ES6
     const receiver = {};

     Object.assign(receiver,
       {
         type: 'js',
         name: 'prog'
       },
       {
         type: 'css',
         name: 'Ella'

       }
       );

     console.log(receiver);  // { type: 'css', name: 'Ella' } если есть одинаковые наименования ключей, нижние перезапишут верхние


//////////////////////////////////////////////////////////

  const objFunc = {
    emitted: value => console.log(value || 'emitted')
  }

  const newObj = {};

  Object.assign(newObj, objFunc);


  console.log(newObj); // { emitted: [Function: emitted] }
  console.log(newObj.emitted('Kimry')); // Kimry