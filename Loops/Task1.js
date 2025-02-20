/*

Problem 1: Sum of Numbers (Easy)
Write a function that takes a number n and returns the sum of all integers from 1 to n. You must use a loop to calculate the sum.

Example:

javascript
Copy
Edit
sumUpTo(5); // should return 15 (1 + 2 + 3 + 4 + 5 = 15)


*/


 function sumUpTo(n) {
    let sum = 0;
    for (var i = 1; i < n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumUpTo(5)); // 15







  function summ(number){

let sum  = 0
    for ( var b = 0; b <= number; b++){
        sum += b;
    }
    return sum;
  }
  console.log (summ (3));
  