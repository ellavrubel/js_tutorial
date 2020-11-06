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

     get: function () {                       //es5?

      return this.firstName + ' ' + this.lastName;
    },

     set: function (value) {                 // es5

      const split = value.split(' ');
      this.firstName = split[0];
      this.lastName = split[1];

    }
  })



 user2.fullName = 'Masha Ivanova';

  console.log(user2.fullName); // Masha Ivanova
 console.log(user2.firstName); // Masha
  console.log(user2.lastName); // Ivanova
 console.log(Object.getOwnPropertyNames(user2));  // [ 'firstName', 'lastName', 'fullName' ]


 // аналогично get/set работает в литерале объекта

 const userLiteral = {
    firstNameL: null,
    lastNameL: null,

   get fullNameL () {   // es6

      return this.firstNameL + ' ' + this.lastNameL;
   },
   set fullNameL (value){    // es6

      let x = value.split(' ');
      this.firstNameL = x[0];
      this.lastNameL = x[1];
   }

 }

 userLiteral.fullNameL = 'Adelaida Nino';

 console.log(Object.getOwnPropertyNames(userLiteral));  // [ 'firstNameL', 'lastNameL', 'fullNameL' ]

 console.log(userLiteral.fullNameL);   // Adelaida Nino

 console.log(userLiteral.firstNameL);  // Adelaida

 console.log(userLiteral.lastNameL);  // Nino






