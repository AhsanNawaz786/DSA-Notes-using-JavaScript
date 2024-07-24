/* Tries in JavaScript
A Trie (or prefix tree) is a special type of tree used to efficiently store and retrieve keys in a dataset of strings.
It is particularly useful for scenarios where prefix-based searches are common, such as in autocomplete systems.

Basics of Tries
Node: Each node of a trie contains:

>>> children: A map of characters to subsequent nodes.
>>> isEndOfWord: A boolean indicating whether the node marks the end of a word.
>>> Root: The root node does not contain any character.


*/

/* In-Depth Functions of Tries

1. Insert:
   - Details: Adds a word to the Trie. Each character of the word is inserted as a node, and the end node is marked as the end of a word.
   - Complexity: O(m) where `m` is the length of the word.

2. Search:
   - Details: Checks if a word is present in the Trie. It traverses through the nodes according to the characters in the word.
   - Complexity: O(m) where `m` is the length of the word.

3. Delete:
   - Details: Removes a word from the Trie. It recursively removes nodes that are no longer part of any other word.
   - Complexity: O(m) where `m` is the length of the word.

4. Prefix Search:
   - Details: Checks if there is any word in the Trie that starts with a given prefix. Useful for autocompletion.
   - Complexity: O(m) where `m` is the length of the prefix.

5. Auto-completion:
   - Details: Returns all words in the Trie that start with a given prefix. This can be implemented using a combination of prefix search and depth-first traversal from the node where the prefix ends.
   - Complexity: O(m + k) where `m` is the length of the prefix and `k` is the number of words that start with the prefix.

6. Word Count:
   - Details: Counts the number of words in the Trie that start with a given prefix.
   - Complexity: O(m) where `m` is the length of the prefix.

7. Node Count:
   - Details: Counts the total number of nodes in the Trie. This can help in understanding the space complexity.
   - Complexity: O(n) where `n` is the total number of nodes.

8. Longest Common Prefix:
   - Details: Finds the longest common prefix of a set of words. This can be useful in various applications.
   - Complexity: O(m) where `m` is the length of the longest common prefix.

<_________________Advanced Trie Operations and Optimizations_____________________>

1. Trie with Value Storage:
   - Details: Instead of just storing the existence of a word, each node can also store additional data (e.g., frequency count, value associated with the word).

2. Compressed Trie (Radix Tree):
   - Details: Compresses the Trie to reduce its size by combining nodes that share a common prefix.

3. Suffix Trie:
   - Details: A type of Trie that stores all suffixes of a given string. Useful for substring searches.

<______________ Enhanced Trie Implementation__________________________>

*/

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.value = null; // Store additional value
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word with an optional value
  insert(word, value = null) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
    node.value = value;
  }

  // Search for a word
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  // Delete a word
  delete(word) {
    const deleteRecursively = (node, word, index) => {
      if (index === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        return node.children.size === 0;
      }

      const char = word[index];
      const childNode = node.children.get(char);
      if (!childNode) {
        return false;
      }

      const shouldDeleteChildNode = deleteRecursively(
        childNode,
        word,
        index + 1
      );
      if (shouldDeleteChildNode) {
        node.children.delete(char);
        return !node.isEndOfWord && node.children.size === 0;
      }

      return false;
    };

    deleteRecursively(this.root, word, 0);
  }

  // Search for a prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  // Auto-completion
  autoComplete(prefix) {
    const results = [];
    let node = this.root;

    for (const char of prefix) {
      if (!node.children.has(char)) {
        return results;
      }
      node = node.children.get(char);
    }

    this._findWordsFromNode(node, prefix, results);
    return results;
  }

  _findWordsFromNode(node, prefix, results) {
    if (node.isEndOfWord) {
      results.push(prefix);
    }

    for (const [char, childNode] of node.children) {
      this._findWordsFromNode(childNode, prefix + char, results);
    }
  }

  // Count total number of nodes
  countNodes() {
    const countRecursively = (node) => {
      let count = 1; // Count this node
      for (const childNode of node.children.values()) {
        count += countRecursively(childNode);
      }
      return count;
    };

    return countRecursively(this.root) - 1; // Subtract root node
  }
}

// Example usage:
const trie = new Trie();

trie.insert("hello", "greeting");
trie.insert("hell", "place");
trie.insert("helicopter", "aircraft");

console.log(trie.search("hello")); // Output: true
console.log(trie.search("hell")); // Output: true
console.log(trie.search("helicopter")); // Output: true
console.log(trie.search("helloo")); // Output: false

console.log(trie.startsWith("hel")); // Output: true
console.log(trie.autoComplete("hel")); // Output: [ 'hello', 'hell', 'helicopter' ]

trie.delete("hell");
console.log(trie.search("hell")); // Output: false

console.log(trie.countNodes()); // Output: Total number of nodes in the Trie

/* Summary

- Basic Operations: 
    -> Insert,
    -> Search,
    -> Delete.

- Additional Functions: 
    -> Prefix Search,
    -> Auto-completion,
    -> Node Count,
    -> Longest Common Prefix.

- Optimizations: 
    -> Value Storage,
    -> Compressed Trie,
    -> Suffix Trie.

Note: Tries are powerful for string-related operations and can be optimized and extended based on specific use cases.

*/
