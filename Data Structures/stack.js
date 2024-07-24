/*  
-> Stack
   A stack is a data structure that follows the Last In First Out (LIFO).

   <---Stack Operations Explained-----> 

1. Push: Adds an element to the top of the stack.
    -> Array: Use the push method.
    -> Linked List: Create a new node, point its next to the current top, and update top to the new node.

2. Pop: Removes and returns the top element of the stack.
    -> Array: Use the pop method.
    -> Linked List: Update top to top.next and return the data of the popped node.

3. Peek: Returns the top element without removing it from the stack.
    -> Array: Return the last element in the array.
    -> Linked List: Return the data of the top node.

4. isEmpty: Checks if the stack is empty.
   -> Array: Check if the length of the array is zero.
   -> Linked List: Check if top is null.

5. size: Returns the number of elements in the stack.
   -> Array: Return the length of the array.
   -> Linked List: Traverse the linked list and count the nodes.

6. printStack: Prints all elements in the stack.
   -> Array: Join the array elements into a string and print.
   -> Linked List: Traverse the linked list and collect data into an array, then print.

*/

/* Array Based Stack */

class StackArray {
  constructor() {
    this.items = [];
  }

  // Push operation
  push(element) {
    this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack
  printStack() {
    console.log(this.items.join(" "));
  }
}

// Example usage:
const stackArray = new StackArray();
stackArray.push(1);
stackArray.push(2);
stackArray.push(3);
stackArray.printStack(); // Output: 1 2 3
console.log(stackArray.pop()); // Output: 3
console.log(stackArray.peek()); // Output: 2
stackArray.printStack(); // Output: 1 2

/* Linked List Based Stack */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
  }

  // Push operation
  push(element) {
    const newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Get the size of the stack
  size() {
    let count = 0;
    let current = this.top;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Print the stack
  printStack() {
    let current = this.top;
    const result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

// Example usage:
const stackLinkedList = new StackLinkedList();
stackLinkedList.push(1);
stackLinkedList.push(2);
stackLinkedList.push(3);
stackLinkedList.printStack(); // Output: 3 2 1
console.log(stackLinkedList.pop()); // Output: 3
console.log(stackLinkedList.peek()); // Output: 2
stackLinkedList.printStack(); // Output: 2 1
