/*
<------Trees in JavaScript --------> 

1. Binary Trees:
   A binary tree is a tree data structure in which each node has at most two children,
   referred to as the left child and the right child.

2. Binary Search Trees (BST): 
   A binary search tree is a binary tree with the following properties:

   The left subtree of a node contains only nodes with keys less than the node’s key.
   The right subtree of a node contains only nodes with keys greater than the node’s key.
    Both the left and right subtrees must also be binary search trees.

3. AVL Trees:
   An AVL tree is a self-balancing binary search tree where the difference between the heights
   of left and right subtrees cannot be more than one for all nodes.

4. Red-Black Trees: 
   A red-black tree is a balanced binary search tree with the following properties:
  
-> Every node is either red or black.
-> The root is black.
-> All leaves (NIL nodes) are black.
-> If a red node has children, then the children are always black (no two red nodes in a row on a path).
-> Every path from a node to its descendant NIL nodes has the same number of black nodes.

5. Tree Traversals: 
   Tree traversal refers to the process of visiting each node in a tree data structure,
   exactly once, in a systematic way. 

Here are three common types of traversal:
   5.1. In-order Traversal: Visit the left subtree, the root, then the right subtree.
   5.2. Pre-order Traversal: Visit the root, the left subtree, then the right subtree.
   5.3. Post-order Traversal: Visit the left subtree, the right subtree, then the root.

*/
//Node Class

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1; // For AVL Tree
    this.color = "red"; // For Red-Black Tree
  }
}

// Binary Search Tree (BST)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("In-order traversal:");
bst.inOrder(); // Output: 1 3 4 6 7 8 10 13 14

console.log("Pre-order traversal:");
bst.preOrder(); // Output: 8 3 1 6 4 7 10 14 13

console.log("Post-order traversal:");
bst.postOrder(); // Output: 1 4 7 6 3 13 14 10 8

//<-----AVL TREE ------->

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper functions to get the height of the node and to right and left rotate the subtree rooted with y and x
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }

  getBalance(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insert(node, data) {
    if (node === null) return new Node(data);
    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else if (data > node.data) {
      node.right = this.insert(node.right, data);
    } else {
      return node;
    }
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    const balance = this.getBalance(node);
    if (balance > 1 && data < node.left.data) {
      return this.rightRotate(node);
    }
    if (balance < -1 && data > node.right.data) {
      return this.leftRotate(node);
    }
    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    return node;
  }

  insertRoot(data) {
    this.root = this.insert(this.root, data);
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}

// Example usage:
const avlTree = new AVLTree();
avlTree.insertRoot(10);
avlTree.insertRoot(20);
avlTree.insertRoot(30);
avlTree.insertRoot(40);
avlTree.insertRoot(50);
avlTree.insertRoot(25);

console.log("In-order traversal:");
avlTree.inOrder(); // Output: 10 20 25 30 40 50

/// Red Black Tree

class RedBlackTree {
  constructor() {
    this.TNULL = new Node(null);
    this.TNULL.color = "black";
    this.root = this.TNULL;
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== this.TNULL) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  rightRotate(x) {
    const y = x.left;
    x.left = y.right;
    if (y.right !== this.TNULL) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  insert(key) {
    const node = new Node(key);
    node.parent = null;
    node.data = key;
    node.left = this.TNULL;
    node.right = this.TNULL;
    node.color = "red";
    let y = null;
    let x = this.root;
    while (x !== this.TNULL) {
      y = x;
      if (node.data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    node.parent = y;
    if (y === null) {
      this.root = node;
    } else if (node.data < y.data) {
      y.left = node;
    } else {
      y.right = node;
    }
    if (node.parent === null) {
      node.color = "black";
      return;
    }
    if (node.parent.parent === null) {
      return;
    }
    this.fixInsert(node);
  }

  fixInsert(k) {
    while (k.parent.color === "red") {
      if (k.parent === k.parent.parent.right) {
        let u = k.parent.parent.left;
        if (u.color === "red") {
          u.color = "black";
          k.parent.color = "black";
          k.parent.parent.color = "red";
          k = k.parent.parent;
        } else {
          if (k === k.parent.left) {
            k = k.parent;
            this.rightRotate(k);
          }
          k.parent.color = "black";
          k.parent.parent.color = "red";
          this.leftRotate(k.parent.parent);
        }
      } else {
        let u = k.parent.parent.right;
        if (u.color === "red") {
          u.color = "black";
          k.parent.color = "black";
          k.parent.parent.color = "red";
          k = k.parent.parent;
        } else {
          if (k === k.parent.right) {
            k = k.parent;
            this.leftRotate(k);
          }
          k.parent.color = "black";
          k.parent.parent.color = "red";
          this.rightRotate(k.parent.parent);
        }
      }
      if (k === this.root) {
        break;
      }
    }
    this.root.color = "black";
  }

  inOrder(node = this.root) {
    if (node !== this.TNULL) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}

// Example usage:
const redBlackTree = new RedBlackTree();
redBlackTree.insert(55);
redBlackTree.insert(40);
redBlackTree.insert(65);
redBlackTree.insert(60);
redBlackTree.insert(75);
redBlackTree.insert(57);

console.log("In-order traversal:");
redBlackTree.inOrder(); // Output: 40 55 57 60 65 75



/*     Tree Traversals
The methods inOrder, preOrder, and postOrder provided in the examples above can be used for tree traversal.

Summary:
1. Binary Trees: Basic tree structure where each node has up to two children.
2. Binary Search Trees (BST): Binary tree with ordered nodes.
3. AVL Trees: Self-balancing binary search trees.
4. Red-Black Trees: Balanced binary search trees with specific properties for maintaining balance.
5. Tree Traversals: Methods to visit all nodes of the tree systematically (in-order, pre-order, post-order).

*/
