/*
-> Doubly Linked List.

A Doubly Linked List is a data structure that consists of a sequence of nodes,
each of which contains a reference (i.e., a "link") to the previous node and a 
reference to the next node in the sequence.

*/

/*  Following are the Operations that we can perform with the a Linked List.
1. Insertion (Insertion at the start, Insertion at the specific index, Insertion at the end).

2. Deletion(Deletion at the start , Deletion at the specific index, Deletion at the end).

3. Traversal (Forward traversal ,  Backward traversal).

4. Search (Linear Search, Binary Search).

5. Update.

6. Reverse.

7. Sort.

8. Split.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // 1. Insertion
  insertAtStart(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insertAtIndex(index, data) {
    if (index === 0) {
      this.insertAtStart(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current === null) {
        throw new Error("Index out of range");
      }
      current = current.next;
    }
    if (current === null) {
      throw new Error("Index out of range");
    }
    newNode.next = current.next;
    newNode.prev = current;
    if (current.next !== null) {
      current.next.prev = newNode;
    }
    current.next = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
  }

  // 2. Deletion
  deleteAtStart() {
    if (this.head === null) {
      throw new Error("Deletion from empty list");
    }
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
  }

  deleteAtIndex(index) {
    if (this.head === null) {
      throw new Error("Deletion from empty list");
    }
    if (index === 0) {
      this.deleteAtStart();
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current === null) {
        throw new Error("Index out of range");
      }
      current = current.next;
    }
    if (current === null || current.prev === null) {
      throw new Error("Index out of range");
    }
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
    current.prev.next = current.next;
  }

  deleteAtEnd() {
    if (this.head === null) {
      throw new Error("Deletion from empty list");
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.prev.next = null;
  }

  // 3. Traversal
  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  traverseBackward() {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // 4. Search
  linearSearch(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  binarySearch(value) {
    // Binary search only works on sorted lists
    // This implementation converts the list to an array for simplicity
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    arr.sort((a, b) => a - b);
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  // 5. Update
  update(index, value) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current === null) {
        throw new Error("Index out of range");
      }
      current = current.next;
    }
    if (current === null) {
      throw new Error("Index out of range");
    }
    current.data = value;
  }

  // 6. Reverse
  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const nextNode = current.next;
      current.next = prev;
      current.prev = nextNode;
      prev = current;
      current = nextNode;
    }
    if (prev !== null) {
      this.head = prev;
    }
  }

  // 7. Sort
  sort() {
    if (this.head === null || this.head.next === null) {
      return;
    }
    let current = this.head;
    while (current) {
      let index = current.next;
      while (index) {
        if (current.data > index.data) {
          [current.data, index.data] = [index.data, current.data];
        }
        index = index.next;
      }
      current = current.next;
    }
  }

  // 8. Split
  split() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const mid = slow;
    const secondHalf = mid.next;
    mid.next = null;
    if (secondHalf) {
      secondHalf.prev = null;
    }
    const firstHalf = this.head;

    return { firstHalf, secondHalf };
  }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.insertAtEnd(3);
dll.insertAtEnd(1);
dll.insertAtEnd(4);
dll.insertAtEnd(2);
dll.insertAtEnd(5);
dll.traverseForward();
dll.traverseBackward();
console.log("Index of 4:", dll.linearSearch(4));
dll.update(2, 10);
dll.traverseForward();
dll.reverse();
dll.traverseForward();
dll.sort();
dll.traverseForward();
const { firstHalf, secondHalf } = dll.split();
