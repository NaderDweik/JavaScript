/*

Problem 3: Leap Year Checker
Write a program that:


Asks the user for a year.
Checks if the year is a leap year using the following rules:
A year is a leap year if it is divisible by 4.
However, if the year is divisible by 100, it must also be divisible by 400 to be a leap year.
Print "Leap year" if it is a leap year, otherwise print "Not a leap year".
*/

const prompt = require("prompt-sync")();
while(1){
var input = prompt("Give me the year (or type 'exit' to quit): "); 

if (input.toLowerCase() === "exit") {
 console.log("Goodbye!");
 break; 
    }

function leapYear(year){
var year = prompt("enter a year")


if  ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){

    console.log("this year is a leap year")
}


else{ 
    console.log("its not a leap year")
}
}

leapYear()
}

