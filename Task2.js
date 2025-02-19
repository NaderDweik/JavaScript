/*
2. Print a table containing multiplication tables
Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table? */


for (var x = 0; x < 13;x++){
    
    for (var y = 0;y< 12; y++){

        console.log (x * y)

    }
}




for (var x = 1; x <= 10; x++) { // Outer loop for numbers 1-10
    console.log("Multiplication Table for " + x); // Table header
    
    for (var y = 1; y <= 12; y++) { // Inner loop for numbers 1-12
        console.log(x + " x " + y + " = " + (x * y)); // Properly formatted output
    }

    console.log("\n"); // Adds spacing between tables
}
















for( var xx = 1; xx <=3; xx ++){

 console.log ("table of the number for the number of 3" + xx);

for (var yy= 1 ; yy <= 12; yy++){

    console.log (xx + " X " + yy + "=" + (xx * yy) );
}

console.log ("/n");


}
    