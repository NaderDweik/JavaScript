function sortArray(array) {
    array.sort(function(a, b) {
        return a - b;
    });


    console.log("Sorted array is: " + array);
    return array; 
}




function SortingArray(array2){
array2.sort(function (aa, bb ){

    return aa -bb ;
});
console.log("Sorted array is: " + array2);
return array2; }


function sese (array3){

    array3.sort( function (aaa, bbb){

return aaa - bbb;
    });

    console.log("random array sorted is " + array3)
    return array3;
}


function nader(array4){
array4.sort(function(z, x){
    return z - x; 
})

console.log ("random array number 2 " + array4)
return array4;
}

function Esraa(arrayz){
arrayz.sort (function(an, bn){
return an - bn;

})
console.log("Hello Esraa here is your array" + arrayz)
return arrayz;

}




function mahdi(numbers){

numbers.sort (function (ag, bg ){
return ag - bg;
})

 console.log("Mahdi what are you doing, take ur array" + numbers)
 return numbers;
}

console.log("Test 1 (Integers):");
sortArray([10, 2, 33, 4, 15, 7]);

console.log("\nTest 2 (Negative numbers):");
sortArray([-10, -2, -33, -4, -15, -7]);

console.log("\nTest 3 (Decimals):");
sortArray([10.5, 2.7, 33.2, 4.1, 15.3, 7.9]);

console.log("\nTest 4 (Mixed up):");
SortingArray([1,2,3,6.2,12,66])

console.log ("random array\n");
sese ([22,333,41651,-1,6362])

console.log ("random array\n");
nader ([-22,22333,-1651,-1,6362])

console.log ("hello nader take ur array ");
Esraa([6272727, 7272, -334, 2324 ,5156 ])



console.log("Mahdi what are you doing, take ur array")
mahdi([35252, 62535, 67253, 4534])








