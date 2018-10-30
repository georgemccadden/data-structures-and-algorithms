// Using a for loop, I'll count down from 10 to 1 --> for(let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// This is the same process but with recursion.

// function countdown(number) {
//   console.log(n);
//   countdown(number - 1);
// }
// function countdown(number) {
//   if(number === 1) {
//     return 1;
//   } else {
//     console.log(number);
//     countdown(number - 1);
//   }
// }


const sumTo = (number) => {
  if(number === 1) {
    return 1;
  } else {
    return number + sumTo(number - 1);
  }
};

console.log(sumTo(10));
