  // DZ

  // посчитать кол-во элементов > 0 и < 0 и сумму первых и вторых

  const numbers = [-30, 26, -4, -3, -67, -23, 45, 34, 89, 100];

    let positiveCount = 0;
    let negativeCount = 0;
    let positiveSum = 0;
    let negativeSum = 0;


    for (let i = 0; i < numbers.length; i++){

        if(numbers[i] > 0){
            positiveCount += 1;
            positiveSum += numbers[i];

        } else {
            negativeCount +=1;
            negativeSum += numbers[i];
        }
    }

    console.log(positiveCount); // 5
    console.log(negativeCount); // 5
    console.log(positiveSum);   // 294
    console.log(negativeSum);   // -127


  //     Cоздать новый массив evenNumbers, который будет содержать только чётные элементы, не использовать length


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





