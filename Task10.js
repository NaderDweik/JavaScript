/* 10. Return the number of vowels in a string
Create a function that’ll return an integer of 
the number of vowels found in a string. This is
a great way to practice determining the features
of a dataset. If you use JavaScript later in your career,
you’ll be well-prepared to determine what datasets (or just strings)
consist of. If you feel like an extra challenge, consider returning the number of characters.

*/

function returnVowels(str) {
    if (typeof str !== "string") {
        console.log("Invalid input. Please enter a string.");
        return;
    }

    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log("Number of vowels:");
    return count;
}

returnVowels("hello world");






