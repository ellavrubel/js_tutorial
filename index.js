

 const user = {

  firstName: 'Ella',
   lastName: 'Vrubel',
   clothes: ['boots','shoose', 'skirts', 'jeance'],
   myEveningSet(){  // ES6 краткая запись метода

    return 'Today I am wearing' + ' ' + this.clothes[2] + ' ' + 'and ' + this.clothes[1] + '.';

   },
   age: 38,
   fullName: function () {  // ES5 - полная запись метода

     return this.firstName + ' ' + this.lastName;

   }
 }

 console.log(user.fullName); // [Function: fullName]
 console.log(user.fullName()); // Ella Vrubel
 console.log(user.myEveningSet());

