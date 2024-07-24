/*
<----Queue Data Structure---->
Queues are data structures that follow the First In First Out (FIFO) principle. 

 <----Queue Operations Explained ----> 
 1. Enqueue: Adds an element to the end of the queue.
    Array: Use the push method.
    Linked List: Create a new node, update the next of the current rear, and set the new node as the rear.

 2. Dequeue: Removes and returns the front element of the queue.
    Array: Use the shift method.
    Linked List: Update front to front.next and return the data of the dequeued node.

 3. Peek: Returns the front element without removing it from the queue.
    Array: Return the first element in the array.
    Linked List: Return the data of the front node.

4. isEmpty: Checks if the queue is empty.
   Array: Check if the length of the array is zero.
   Linked List: Check if front is null.

5. size: Returns the number of elements in the queue.
   Array: Return the length of the array.
   Linked List: Traverse the linked list and count the nodes.

6. printQueue: Prints all elements in the queue.
   Array: Join the array elements into a string and print.
   Linked List: Traverse the linked list and collect data into an array, then print.


*/

/*  Array Based Queue */
class QueueArray {
  constructor() {
    this.items = [];
  }

  // Enqueue operation
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue operation
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue
  printQueue() {
    console.log(this.items.join(" "));
  }
}

// Example usage:
const queueArray = new QueueArray();
queueArray.enqueue(1);
queueArray.enqueue(2);
queueArray.enqueue(3);
queueArray.printQueue(); // Output: 1 2 3
console.log(queueArray.dequeue()); // Output: 1
console.log(queueArray.peek()); // Output: 2
queueArray.printQueue(); // Output: 2 3

/* Linked List Based Queue */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Enqueue operation
  enqueue(element) {
    const newNode = new Node(element);
    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Dequeue operation
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const temp = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return temp.data;
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.data;
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Get the size of the queue
  size() {
    let count = 0;
    let current = this.front;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Print the queue
  printQueue() {
    let current = this.front;
    const result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

// Example usage:
const queueLinkedList = new QueueLinkedList();
queueLinkedList.enqueue(1);
queueLinkedList.enqueue(2);
queueLinkedList.enqueue(3);
queueLinkedList.printQueue(); // Output: 1 2 3
console.log(queueLinkedList.dequeue()); // Output: 1
console.log(queueLinkedList.peek()); // Output: 2
queueLinkedList.printQueue(); // Output: 2 3

/*
  Priority Queue Implementation
  A priority queue is a special type of queue in which each element is associated with a priority,
  and elements are dequeued in order of their priority.
*/

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Enqueue operation with priority
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 1, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(queueElement);
    }
  }

  // Dequeue operation
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift().element;
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0].element;
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue
  printQueue() {
    console.log(
      this.items.map((item) => `${item.element}(${item.priority})`).join(" ")
    );
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);
priorityQueue.printQueue(); // Output: Task 2(1) Task 1(2) Task 3(3)
console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.peek()); // Output: Task 1
priorityQueue.printQueue(); // Output: Task 1(2) Task 3(3)
