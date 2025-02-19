/*  4. Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem
with a few different sets to verify your solution.
Have one array with negative and positive numbers and another with integers and decimals.

You could also try using arrays of different lengths.
If you’re feeling comfortable with this, 
try the slightly more challenging bonus challenge below.
Bonus intermediate challenge: Create a function that can 
return the sum of a particular column or row number in a table. */

function sumArray(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i]; 
    }

    console.log("The array length is " + array.length);
    console.log("Sum of the array is " + sum);

    return sum; 
}

sumArray([1, 2, 3, 5, 2, -1, 753, 21, 3, 0, 212]);

function sumOfIt(array){

sum = 0;

    for (i = 0; i < array.length ; i++  ){
     sum = sum + array [i];
    }

    console.log("the sum of the second  array is " + sum);
}

sumOfIt([1, 4 ,-23 ,-42 , -2])

