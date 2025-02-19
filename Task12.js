/* 
12. Check if a string is a palindrome
A palindrome is a word, phrase, number, or other sequences 
of characters that reads the same forward and backward
(like the words “kayak,” “mom,” “radar,” and “refer”).
Create a function that takes a string as input and returns 
a Boolean indicating whether the string is a palindrome. 
Test your function with different strings to ensure it works correctly.

*/

function checkPali(str) {

    str = str.toLowerCase()
     
    // Go through each character from the start and end
    for (let i = 0; i < str.length; i++) {

        // Check if the character from the start and the end are different
        if (str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    
    return true; 
}

console.log(checkPali("HeeeeeeeH")); 
console.log(checkPali("Radar")); 
