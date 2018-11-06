'use strict';
// In order to get a better understanding of what the challenge is asking, I wrote out the solution to classic "fizzbuzz".

function fizzBuzz(input) {
  for (let i = 0; i < input.length; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

