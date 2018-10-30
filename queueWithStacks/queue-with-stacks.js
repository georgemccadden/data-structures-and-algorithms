'use strict';

// You'll need to import your modularized functions.
import {enqueue} from './lib/enqueue.js';
import {dequeue} from './lib/dequeue.js';

// Instead of head, tail, and length I'm using first, last, and size because the others are reserved for linked lists.

class PseudoQueue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
} 
