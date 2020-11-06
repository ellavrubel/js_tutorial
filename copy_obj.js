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





