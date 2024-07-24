/*
Maps in JavaScript

A Map is a built-in data structure in JavaScript that holds key-value pairs where both keys and values can be of any data type. Unlike objects, Maps maintain the insertion order of keys and provide built-in methods to work with the key-value pairs.

>>>>> Basic Operations: 

1. Creating a Map
2. Setting Values
3. Getting Values
4. Deleting Entries
5. Checking for Existence
6. Clearing the Map
7. Iterating Over Entries
8. Size of the Map

Detailed Overview of Map Operations: 

1. Creating a Map: You can create a Map using the `new Map()` constructor. You can also initialize it with an array of key-value pairs.
*/

// Creating an empty Map
const myMap = new Map();

// Creating a Map with initial key-value pairs
const myMapWithValues = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

/*
2. Setting Values

The `set(key, value)` method adds or updates an entry in the Map.
*/

myMap = new Map();

// Adding entries
myMap.set("name", "Alice");
myMap.set("age", 30);

// Updating an entry
myMap.set("age", 31);

console.log(myMap); // Map { 'name' => 'Alice', 'age' => 31 }

/*3. Getting Values

The `get(key)` method retrieves the value associated with the specified key.
*/

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log(myMap.get("name")); // Alice
console.log(myMap.get("age")); // 30
console.log(myMap.get("nonexistent")); // undefined

/*
4. Deleting Entries:

The delete(key) method removes the entry associated with the specified key.
Returns `true` if the entry was successfully removed, otherwise `false`.

*/

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log(myMap.delete("age")); // true
console.log(myMap.delete("nonexistent")); // false

console.log(myMap); // Map { 'name' => 'Alice' }

/* 
5. Checking for Existence:
    The `has(key)` method checks if the Map contains the specified key.Returns `true` if the key exists, otherwise `false`.
*/
myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log(myMap.has("name")); // true
console.log(myMap.has("age")); // true
console.log(myMap.has("nonexistent")); // false

// 6. Clearing the Map:
// The `clear()` method removes all entries from the Map.

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

myMap.clear();
console.log(myMap); // Map {}

// 7. Iterating Over Entries
// Maps can be iterated using several methods:

// forEach` Method

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: Alice
// age: 30

///for...of` Loop:

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
/* Output:
  name: Alice
  age: 30
 
  
  Using Iterators

  - keys()`: Returns an iterator of keys.
  - values(): Returns an iterator of values.
  - entries(): Returns an iterator of [key, value] pairs.

  */

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log([...myMap.keys()]); // ['name', 'age']
console.log([...myMap.values()]); // ['Alice', 30]
console.log([...myMap.entries()]); // [['name', 'Alice'], ['age', 30]]

/*
  8. Size of the Map: The `size` property returns the number of entries in the Map.
  */

myMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);

console.log(myMap.size); // 2

/* 
Summary

- Creating a Map: Use `new Map()` or initialize with key-value pairs.
- Set Values: `set(key, value)`
- Get Values: `get(key)`
- Delete Entries: `delete(key)`
- Check for Existence: `has(key)`
- Clear the Map: `clear()`
- Iterate Over Entries: Use `forEach`, `for...of`, or iterator methods (`keys()`, `values()`, `entries()`).
- Size: `size` property.

Maps provide a flexible and efficient way to store and manipulate key-value pairs with support
for various data types and methods for managing and iterating over the entries.

*/
