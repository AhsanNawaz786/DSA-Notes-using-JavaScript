/* String Manipulation Funtion in an Array

1. String.toUpperCase();
2. String.toLowerCase();
3. String.concat();
4. string.join(',);
5. string.substr();
6. string.length();
7. string.charAt();
8. string.charCodeAt();
9. string.indexOf();
10. string.lastindexOf();
11. string.slice();
12. string.substring();
13. string.trim();
14. string.repeat();
15. string.replace();

 */

const str = "Hello, World!";
const arr = str.split(", ");
const newStr = arr.join(" - ");
console.log(arr); // Output: ['Hello', 'World!']
console.log(newStr); // Output: 'Hello - World!'
