'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(node) {
    this.head = node.value;
  }

  insert(value) {
    let newHead = new LinkedList( new Node(value) );
  }

  includes(value) {
    while(Node.value !== undefined) {
      if(Node.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    while(Node.value !== undefined) {
      return Node.value;
    }
  }

  append(value) {
    let newNode = new Node(value);
    if(this.head.next === null) {
      this.head.next = newNode;
    }
    while(Node.next === null) {
      Node.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
  }