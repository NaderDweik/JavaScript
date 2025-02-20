/*
Problem 2: Even Numbers (Easy)
Write a function that takes a number n and logs all even numbers from 1 to n. Use a loop to iterate through
the numbers and check if they are even.

Example:

logEvenNumbers(10); 
// should log: 2, 4, 6, 8, 10

*/



function findEven(arr){

    var evens = [];
    var odds = [];


for (i = 0 ; i < arr.length ; i ++ ){

    if (arr[i] % 2 == 0){
        evens.push (arr[i])
    }
    else {
        odds.push (arr[i]) 

    }
}

console.log ("even numbers: " , evens)


console.log ("odd numebrs " ,  odds)

}


console.log (findEven([1, 2, 3, 4, 5, 6, 7, 4, 2334, 122]))
