
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

var MinStack = function () {
  this.stack = [];
  this.minStack = []; // To keep track of minimum elements
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  // Check if the minStack is empty or if the new value is smaller than the current minimum
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  // If the popped value is the current minimum, also pop it from the minStack
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
