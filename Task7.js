/* 7. Create a function that filters out negative numbers
In this challenge, you’ll have a function that takes an array
as an input and returns an array. But if all goes according to plan,
it’ll remove the negative numbers. This is another example of a task 
that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.” */



function filterNumber(array) {
    array = array.filter(function(a) {
        return a >= 0; 
    });

    console.log("Array after removing negative numbers: " + array);
    return array;
}

filterNumber([-1, 2, 5, -12]);

function filtering (arrayz){

    arrayz = arrayz.filter(function (a){

        return a > 0;
    })

    console.log ("the array without the negative numbers" , arrayz)
    return arrayz;
}

console.log("\n No Negative Numbers Array");
filtering ([1, 23, 526, -3, -325, -351])




function filteringThePositiveNumbers(array3){

    array3 = array3.filter(function (c){

        return c < 0;
    })

    console.log ("here is the array with no postive numbers", array3)
    return array3;
}

console.log ("\n No positive  Numbers array: ")
filteringThePositiveNumbers([34,525, -23, 516, -356, 93,-315])



