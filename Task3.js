/* 3. Create a length converter function
Creating a function is a skill that’ll be useful in many settings, and as you progress,
you’ll be working on much more complicated functions than this one. But a function that
converts units of measure can be pretty handy in multiple professions and industries.

Let’s start with a conversion from kilometers to miles. The function should include the 
input in kilometers and return the answer in miles.

*/
function Converter(km) {
    var convertedValue = km * 0.621371; 
    return convertedValue;
}

var km = 3; 

var result = Converter(km); 

console.log(km + " Km is equal to " + result + " miles");









