/*
<----Hash Table----> 
Hash tables are data structures that provide efficient insertion, deletion, and lookup operations.
They use a hash function to compute an index into an array of buckets or slots, 
from which the desired value can be found.



*/

/* 
--> Basics of Hash Tables
A hash table consists of:

1. Keys: Unique identifiers for data.
2. Values: Data associated with keys.
3. Hash Function: Maps keys to indices in the table.
4. Table: An array where the data is stored.


-->> Hashing Function: 
    A hash function converts a given key into an integer (the hash), which is then mapped to an index in the array.

--->> Collision Resolution Techniques Explained
    1. Chaining: 
        Each index of the hash table contains a list of elements that hash to the same index. 
        This method allows multiple elements to exist at the same index by maintaining a list of all elements that hash to that index.

    2. Open Addressing: 
        All elements are stored within the hash table itself. 
        When a collision occurs, the algorithm searches for the next available slot according to a probing sequence:

    3. Linear Probing: 
       Checks the next slot (index + 1) in the table.

    4. Quadratic Probing: 
       Checks slots based on a quadratic function (index + i^2) where i is the iteration number.

    5. Double Hashing: 
       Uses a secondary hash function to determine the step size for probing.


*/

//Simple Hash Function
function hashFunction(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) % tableSize;
  }
  return hash;
}

/* 
  -> Collision Resolution Techniques:
     Collisions occur when two keys hash to the same index. 
    
There are several techniques to handle collisions:

   -> Chaining: 
      Each bucket contains a linked list of elements that hash to the same index.

  -> Open Addressing:
      Finds another bucket within the array by following a sequence until an empty slot is found.

  */

// Chaining:
class HashTableChaining {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    return hashFunction(key, this.table.length);
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return;
      }
    }
  }
}

// Example usage:
const hashTableChaining = new HashTableChaining(10);
hashTableChaining.set("name", "Alice");
hashTableChaining.set("age", 25);
console.log(hashTableChaining.get("name")); // Output: Alice
console.log(hashTableChaining.get("age")); // Output: 25
hashTableChaining.remove("name");
console.log(hashTableChaining.get("name")); // Output: undefined

/*
  Open Addressing
  Linear Probing
*/

class HashTableLinearProbing {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    return hashFunction(key, this.table.length);
  }

  set(key, value) {
    let index = this.hash(key);
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.table.length;
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.table.length;
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        this.table[index] = undefined;
        return;
      }
      index = (index + 1) % this.table.length;
    }
  }
}

// Example usage:
const hashTableLinearProbing = new HashTableLinearProbing(10);
hashTableLinearProbing.set("name", "Bob");
hashTableLinearProbing.set("age", 30);
console.log(hashTableLinearProbing.get("name")); // Output: Bob
console.log(hashTableLinearProbing.get("age")); // Output: 30
hashTableLinearProbing.remove("name");
console.log(hashTableLinearProbing.get("name")); // Output: undefined

/* Quadratic Probing */

class HashTableQuadraticProbing {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    return hashFunction(key, this.table.length);
  }

  set(key, value) {
    let index = this.hash(key);
    let i = 1;
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + i * i) % this.table.length;
      i++;
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this.hash(key);
    let i = 1;
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + i * i) % this.table.length;
      i++;
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    let i = 1;
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        this.table[index] = undefined;
        return;
      }
      index = (index + i * i) % this.table.length;
      i++;
    }
  }
}

// Example usage:
const hashTableQuadraticProbing = new HashTableQuadraticProbing(10);
hashTableQuadraticProbing.set("name", "Charlie");
hashTableQuadraticProbing.set("age", 35);
console.log(hashTableQuadraticProbing.get("name")); // Output: Charlie
console.log(hashTableQuadraticProbing.get("age")); // Output: 35
hashTableQuadraticProbing.remove("name");
console.log(hashTableQuadraticProbing.get("name")); // Output: undefined
