'use strict';

function enqueue(value) {
  animalShelter.push(new Animals(value));
}

function dequeue(preference) {
  if(!animalShelter.length) {
    return null;
  } else {
    if(preference) {
      for (let i = 0; i < animalShelter.length; i++) {
        if (preference === animalShelter[i].type) {
          return animalShelter.splice(i, 1);
        } else {
          return animalShelter.shift();
        }
      }
    }
  }
}

export default {dequeue, enqueue};