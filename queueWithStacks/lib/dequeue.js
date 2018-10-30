'use strict';

// Removing an element from the front of the queue.

function dequeue(){
  if(!this.first) return null;
  
  let temp = this.first;
  
  if(this.first === this.last){
    this.last = null;
  }
  this.first = this.first.next;
  this.size--;

  return temp.value;
}

export {dequeue};