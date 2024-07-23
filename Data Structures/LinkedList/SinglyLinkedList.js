/*
Linked List are of three types:
1. Singly Linked List.
2. Doubly Linked List.
3. Circular Linked List.
*/

/* Singly Linked List */

/*
Operations that we can perform on Singly List are as Follows:

1. Insertion (At the Begining, At the Specific position, At the End).

2. Deletion  (By Specifying the value of a node, By Specifying the node).

3. Traversal (In order to Acces Data, or Modify the Data of a node).

4. Search    (Searches the specific Value of a node.).

5. Concatenation (Concate two nodes).

6. Reverse (Reverse the list of nodes).

7. Size (Size the list of linked lists).

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList extends Node {
  constructor() {
    this.head = null;
  }

  /*
    <-----Insertion-------> 
  1. Insert At Beginning.
  2. Insert At Specific Position.
  3. Insert At End.
    <---------------------->
  */

  insertAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtSpecificPosition(data, position) {
    const newNode = new Node(data);
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let index = 0;
    while (current && index < position - 1) {
      current = current.next;
      index++;
    }
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  /*
   <-----Deletion Process ----->
  1. Delete by Value.
  2. Delete by Node.
  
  */

  deleteByValue(value) {
    if (!this.head) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  deleteByNode(node) {
    if (!this.head || !node) {
      return;
    }

    if (this.head === node) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next !== node) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  /*

 <-----Traversal ------>
   1. In order to Acces Data of a node.
   2. In order to Modify Data of a node.
 <---------------------->

*/

  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.data);
      current = current.next;
    }
  }

  modifyData(oldData, newData) {
    if (!this.head) {
      return;
    }

    if (this.head.data === oldData) {
      this.head.data = newData;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === oldData) {
        current.next.data = newData;
        return;
      }
      current = current.next;
    }
  }

  /*
  Search by a value
  */

  search(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /*<---------------------Concatenate two linked list----------------------> */
  concatenate(list) {
    if (!this.head) {
      this.head = list.head;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = list.head;
  }

  /*
const list1 = new LinkedList();
list1.insertAtBeginning(1);
list1.insertAtBeginning(2);

const list2 = new LinkedList();
list2.insertAtBeginning(3);
list2.insertAtBeginning(4);

list1.concatenate(list2);
list1.traverse(data => console.log(data));     // Output: 2, 1, 3, 4
*/

  /*<--------------Reversing a linked List------------------>*/

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  /*
const list = new LinkedList();
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);

list.reverse();

list.traverse(data => console.log(data));
// Output: 3, 2, 1
*/

  /*<---------Size of the list--------------->  */

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  /*
const list = new LinkedList();
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
console.log(list.size()); // Output: 3

*/
}
