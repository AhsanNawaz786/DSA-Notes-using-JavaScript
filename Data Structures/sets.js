/* Sets in Data Structures

1. Basics of Sets:

A Set is a fundamental abstract data type that represents a collection of distinct elements.
Unlike arrays or lists, sets do not allow duplicate elements, making them useful for tasks that
require uniqueness checks or operations on unique elements.

2. Properties of Sets:

- Uniqueness: Each element in a set is unique. Duplicate elements are not allowed.
- No Order: Sets do not maintain any order of elements. The order in which elements are inserted is not guaranteed to be preserved.
- Dynamic Size: Sets can grow or shrink dynamically as elements are added or removed.

3. Basic Operations:

Here’s a breakdown of the fundamental operations and their complexities:

- Insertion: Adding an element to a set.
  - Time Complexity: O(1) on average, due to hash-based implementations. In some cases, this may degrade to O(n) depending on the hash function and collision resolution.
  
- Deletion: Removing an element from a set.
  - Time Complexity: O(1) on average, similar to insertion. 

- Search: Checking if an element exists in the set.
  - Time Complexity: O(1) on average.

- Traversal: Iterating over all elements in the set.
  - Time Complexity: O(n), where `n` is the number of elements in the set.

- Size: Determining the number of elements in the set.
  - Time Complexity: O(1).

4. Implementation Details:
Sets are typically implemented using hash tables or balanced trees. Here’s a look at each approach:

a. Hash-Based Sets:

Hash Table: Uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
  - Insertion and Search: Average O(1) time complexity due to direct access via hashing.
  - Collision Resolution: Collisions (when two keys hash to the same index) are handled using techniques such as chaining (linked lists) or open addressing (probing).
*/

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet.has(2)); // true
mySet.delete(2);
console.log(mySet.has(2)); // false

/*
b. Tree-Based Sets

- Balanced Trees (e.g., Red-Black Tree)**: Maintains elements in a sorted order. This allows efficient ordered operations but generally has a higher complexity for insertion and search compared to hash-based implementations.
  - Insertion and Search: O(log n) due to the tree’s height.
  - Traversal: O(n) for in-order traversal.

  5. Advanced Set Operations

- Union: Combining all unique elements from two sets.
  - Time Complexity: O(n + m) where `n` and `m` are the sizes of the two sets.

- Intersection: Finding common elements between two sets.
  - Time Complexity: O(min(n, m)).

- Difference: Elements present in one set but not in the other.
  - Time Complexity: O(n) where `n` is the size of the set from which elements are subtracted.

- Subset: Checking if one set is a subset of another.
  - Time Complexity: O(n) where `n` is the size of the smaller set.

  */

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }

// Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set { 3 }

// Difference
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set { 1, 2 }

// Subset
const isSubset = [...setA].every((value) => setB.has(value));
console.log(isSubset); // false

/*

6. Applications of Sets

- Uniqueness Checking: Ensure elements are unique (e.g., filtering duplicates).
- Membership Testing: Fast checks for existence (e.g., checking if a user is in a group).
- Set Operations: Mathematical operations like union, intersection, and difference.
- Data Deduplication: Removing duplicates from datasets.
- Autocomplete Systems: Efficient lookups and prefix-based searches.

7. Summary

- Hash-Based Sets: Fast average time complexity for insertion, deletion, and search. Good for general use where ordering is not required.
- Tree-Based Sets: Maintains elements in a sorted order with O(log n) operations. Useful when ordered operations are necessary.

*/
