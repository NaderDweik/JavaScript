const prompt = require("prompt-sync")();

while (true) {
    var input = prompt("Give me your Grade (or type 'exit' to quit): "); 

    if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        break; 
    }

    var grade = Number(input); 
    
    if (isNaN(grade) || grade < 0 || grade > 100) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
        continue; 
    }

    if (grade >= 90 && grade <= 100) {
        console.log("A");
    } else if (grade >= 80 && grade <= 89) {
        console.log("B");
    } else if (grade >= 70 && grade <= 79) {
        console.log("C");
    } else if (grade >= 60 && grade <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }

    console.log("\n"); 
}
