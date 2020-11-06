  'use strict';


// вычисление через getter возраста

  const user = {

    birthday: null,

    get age(){

      let today = new Date();
      let yearDelta = today.getFullYear() - this.birthday.getFullYear();

      return yearDelta;
    }
  }

  user.birthday = new Date(1982, 4, 1);
  console.log(user.age);   // 38


