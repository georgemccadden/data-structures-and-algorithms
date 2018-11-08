'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  search(value) {
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
      if(!found) return false;
    } return current;
  }
  add(value) {
    let newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value === currentNode.value) return undefined;
        if(value < currentNode.value) {
          if(currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if(value > currentNode.value) {
          if(currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
}

function findMaxValue(binary) {
  if(!binary && !binary.root) {
    return null;
  }
  let maxValue = binary.root.value;
  function compareValues(node) {
    if(!node) {
      return null;
    }
    if(maxValue < node.value) {
      maxValue = node.value;
    }
    compareValues(node.left);
    compareValues(node.right);
  }
  compareValues(binary.root);
  return maxValue;
}

let binary = new BinaryTree();
binary.root = new Node(value);
binary.root.left = new Node(value);
binary.root.right = new Node(value);