/*

Problem 3: Reverse a String (Intermediate)
Write a function that takes a string and returns the string reversed using a loop. Do not use built-in
 reverse functions like split().reverse().join().

Example:

reverseString("hello"); // should return "olleh"

*/


function reverseString(str){


        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
          reversed += str[i];
        }
        return reversed;
      }
      
console.log(reverseString("hello")); // "olleh"
      

console.log(reverseString ("Nader"))
