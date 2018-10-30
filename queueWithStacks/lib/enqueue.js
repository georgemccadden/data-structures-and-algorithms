'use strict';

// Adding  something to the end of a queue.

function enqueue(val){
  let newNode = new Node(val);
  if(!this.first){
    this.first = newNode;
    this.last = newNode;
  } else {
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;
  }
  return ++this.size;
}

export {enqueue};