/*
5. Create a function that reverses an array
This challenge is particularly helpful if you’re planning to become a Data Scientist. 
Manipulating data is a significant part of the role, and building 
the foundations now will help you later down the road when you’re working with large databases.
Start small here and work your way up. Begin with an array of 5 numbers, 
and then try your program with a larger array to verify its success.
*/


function reverseArray (ArraySize){


var Array = [];


for (var i = Array.length -1 ; i >= 0 ;i --){

    Array.push= (ArraySize[i])
}


console.log ("reserved array is " + Array[i])
}




reverseArray([4, 5225])


function reverseArray(arr) {
    var reversed = []; // Initialize an empty array

    // Loop through the array in reverse order and push elements into `reversed`
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    console.log("Reversed array is: " + reversed);
    return reversed;
}

// Test with a sample array
reverseArray([1, 2, 3, 4, 5]);
