'use strict';

function add(value) {
  let newNode = new Node(value);
  if(this.root === null) {
    this.root = newNode;
    return this;
  }
}