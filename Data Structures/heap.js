/*
Heaps in JavaScript
  A heap is a special tree-based data structure that satisfies the heap property.
  There are two main types of heaps: 
     Min-Heaps
     Max-Heaps.

1. Min-Heap: 
   In a Min-Heap, the key at the root must be the smallest among all keys present in the binary heap.
   The same property must be recursively true for all nodes in the binary tree.

2. Max-Heap:
   In a Max-Heap, the key at the root must be the largest among all keys present in the binary heap.
   The same property must be recursively true for all nodes in the binary tree.

3. Heap Operations:
   -> Insert: Add a new key to the heap.
   -> Extract (Extract-Min/Extract-Max): Remove the root node (the minimum or maximum element).
   -> Heapify: Ensure the heap property is maintained. This is usually called after an insertion or deletion.
   -> Peek: Get the root element without removing it.

*/

/// Min HEAP
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

// Insert Operations:
class MinHeap extends MinHeap {
  insert(key) {
    this.heap.push(key);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
}

/// Extract Min Operation
class MinHeap extends MinHeap {
  extractMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

/// Peek Operation:
class MinHeap extends MinHeap {
  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }
}

/* Complete Min Heap Example */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(key) {
    this.heap.push(key);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
console.log(minHeap.peek()); // Output: 10
console.log(minHeap.extractMin()); // Output: 10
console.log(minHeap.peek()); // Output: 15

/* Max Heap Implemention
  A Max-Heap can be implemented similarly to a Min-Heap, with the key difference being
  that the key at the root must be the largest, and the heapifyUp and heapifyDown operations
  should maintain the max-heap property.
  
   */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(key) {
    this.heap.push(key);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] >= this.heap[largerChildIndex]) {
        break;
      }
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);
console.log(maxHeap.peek()); // Output: 20
console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.peek()); // Output: 17

/*  Summary:
1. Min-Heap: The key at the root is the minimum among all keys in the heap.
2. Max-Heap: The key at the root is the maximum among all keys in the heap.
3. Insert: Adds a new key to the heap and maintains the heap property.
4. Extract (Extract-Min/Extract-Max): Removes the root node (the minimum or maximum element) and maintains the heap property.
5. Heapify: Ensures the heap property is maintained after insertion or deletion.
6. Peek: Returns the root element without removing it. 

*/
