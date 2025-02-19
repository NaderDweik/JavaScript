/*
11. Create a function that finds the maximum number in an array
In this challenge, you’ll write a function that takes an array of numbers
as an input and returns the largest number in that array.
Test your function with various arrays, including arrays
with negative numbers, decimals, and all positive integers.
*/



function largestNum(array){

    let largest =  array[0]

    let i;

    for (i = 1; i < array.length; i++ ) {

        if (array[i] > largest){
            largest = array[i]
        }
        }

        return largest;
}


console.log(largestNum([11, 23, 24, 252]));

