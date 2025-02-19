/*9. Return a Boolean if a number is divisible by 10
Here, you’ll create a function that’ll give you a “true” or
“false” Boolean as its output. The inputted number should only 
return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.
*/





function deciding(number){

if (typeof number !== "number"){

console.log ("please enter a number ");
return;

} 

if (number % 10 == 0 ){

console.log("number " + number + " is devided by 10 ")
return number;

} 

else {


    console.log("number " + number + "  isnt devided by 10")
    return number;

}

}

deciding (90)
console.log(deciding)