 'use strict';

  // getter
  const user = {
    firstName: 'Tina',
    lastName: 'Tanina'
  }

  Object.defineProperty(user, 'fullName', {

      get: function fullName (){

       return this.firstName + ' ' + this.lastName;
      }
 })

 console.log(user); // { firstName: 'Tina', lastName: 'Tanina' }  свойство fullName физически отсутствует в объекте

 console.log(user.fullName); // Tina Tanina


//  setter

  const user2 = {

    firstName: null,
    lastName: null

  }



  Object.defineProperty(user2, 'fullName', {

    set: function (value) {

      const split = value.split(' ');
      this.firstName = split[0];
      this.lastName = split[1];

    },

     get: function () {

      return this.firstName + ' ' + this.lastName;
    }
  })



 user2.fullName = 'Masha Ivanova';

  console.log(user2.fullName); // Masha Ivanova
 console.log(user2.firstName); // Masha
  console.log(user2.lastName); // Ivanova
 console.log(Object.getOwnPropertyNames(user2));  // [ 'firstName', 'lastName', 'fullName' ]



