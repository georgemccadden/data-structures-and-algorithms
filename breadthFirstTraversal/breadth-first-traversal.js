'use strict';

breadthFirstTraversal = (tree) => {
  if(!this.root) return null;
  current = this.root;
  enqueue(current);

  while(current) {
    console.log(current.value);
    if(current.left) enqueue(current.left);
    if(current.right) enqueue(current.right);
    dequeue(this.front);
    current = this.front;
  }
};