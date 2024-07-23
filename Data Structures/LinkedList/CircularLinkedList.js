/*
---->>>  Circular Linked List.
A Circular Linked List is a variation of a linked list in which
the last node points to the first node, forming a circular structure.
This means there is no null at the end of the list.Circular Linked Lists can be singly linked or doubly linked.

*/

/* 
--> Insertion

At the beginning: Insert a new node at the start of the list.
At the end: Insert a new node at the end of the list.
At a specific position: Insert a new node at a specific index in the list.

--> Deletion

At the beginning: Delete the first node of the list.
At the end: Delete the last node of the list.
At a specific position: Delete a node from a specific index in the list.

--> Traversal
    Forward traversal: Traverse and print the list in a forward direction.

--> Search
1.  Linear Search: Search for an element in the list.

--> Update
    Update a node: Change the value of a node at a specific position.

--> Reverse
    Reverse the list: Reverse the direction of the list.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // 1. Insertion
  insertAtStart(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      newNode.next = this.head;
      this.head = newNode;
      temp.next = this.head;
    }
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.next = this.head;
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
      if (current.next === this.head) {
        throw new Error("Index out of range");
      }
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  // 2. Deletion
  deleteAtStart() {
    if (this.head === null) {
      throw new Error("Deletion from empty list");
    }
    if (this.head.next === this.head) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = this.head.next;
    this.head = this.head.next;
  }

  deleteAtEnd() {
    if (this.head === null) {
      throw new Error("Deletion from empty list");
    }
    if (this.head.next === this.head) {
      this.head = null;
      return;
    }
    let temp = this.head;
    let prev = null;
    while (temp.next !== this.head) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = this.head;
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
    let prev = null;
    for (let i = 0; i < index; i++) {
      if (current.next === this.head) {
        throw new Error("Index out of range");
      }
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }

  // 3. Traversal
  traverse() {
    if (this.head === null) {
      return;
    }
    let temp = this.head;
    do {
      console.log(temp.data);
      temp = temp.next;
    } while (temp !== this.head);
  }

  // 4. Search
  linearSearch(value) {
    if (this.head === null) {
      return -1;
    }
    let temp = this.head;
    let index = 0;
    do {
      if (temp.data === value) {
        return index;
      }
      temp = temp.next;
      index++;
    } while (temp !== this.head);
    return -1;
  }

  // 5. Update
  update(index, value) {
    if (this.head === null) {
      throw new Error("Update in empty list");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current.next === this.head) {
        throw new Error("Index out of range");
      }
      current = current.next;
    }
    current.data = value;
  }

  // 6. Reverse
  reverse() {
    if (this.head === null || this.head.next === this.head) {
      return;
    }
    let prev = null;
    let current = this.head;
    let nextNode = current.next;
    do {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    } while (current !== this.head);
    this.head.next = prev;
    this.head = prev;
  }
}

// Example usage:
const cll = new CircularLinkedList();
cll.insertAtEnd(3);
cll.insertAtEnd(1);
cll.insertAtEnd(4);
cll.insertAtEnd(2);
cll.insertAtEnd(5);
cll.traverse();
console.log("Index of 4:", cll.linearSearch(4));
cll.update(2, 10);
cll.traverse();
cll.reverse();
cll.traverse();
