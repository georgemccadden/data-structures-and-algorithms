#### Lab 15: Trees ####

# Implement a Tree

## Specifications

Read all of these instructions carefully. Name things exactly as described, or you will get a ZERO without comment.

Do all your work in a public repository (matching the example provided by your instructor) called data-structures-and-algorithms, with a well-formatted, detailed top-level README.md

Create a branch in your repository called Tree.

## On your branch, create… :
- C#: Create a class named Tree.cs
- JavaScript: a folder named tree which contains a file called tree.js
- Python:a folder named tree which contains a file called tree.py
- Java: a folder named Tree which contains a file called Tree.java

Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
NOTE: You can find an example of this configuration for your course in your class lecture repository.

## Features
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

Create a BinaryTree class.

Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which takes in a root node, and returns an array of the nodes.

At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

Create a BinarySearchTree class.

Define a method named add that adds a new node in the correct location in the binary search tree.

Define a method named search that brings in a value of node, and returns the node with the desired value.

## Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Stretch Goal

Create a new branch called k-ary tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.