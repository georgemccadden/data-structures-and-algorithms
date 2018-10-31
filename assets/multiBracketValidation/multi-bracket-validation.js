'use strict';

function multiBracketValidation(str) {
  let stack = new Stack;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '(' || '{' || '[') {
      stack.push(str.charAt(i));
    } 
    else if (str.charAt(i) === ')' && stack.peek() === '(') {
      stack.pop();
    }
    else if (str.charAt(i) === '}' && stack.peek() === '{') {
      stack.pop();
    }
    else if (str.charAt(i) === ']' && stack.peek() === '[') {
      stack.pop();
    }
    else if (str.charAt(i) === ')' && stack.peek() !== '(') {
      return false;
    }
    else if (str.charAt(i) === '}' && stack.peek() !== '{') {
      return false;
    }
    else if (str.charAt(i) === ']' && stack.peek() !== '[') {
      return false;
    }
    return true;
  }
}