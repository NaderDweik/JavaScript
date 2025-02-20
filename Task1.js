//Write a function ucFirst(str) that takes a string as input and returns 
//a new string with the first character capitalized and the rest unchanged. 
//The string can be of any length, and the first character could be lowercase, 
// uppercase, or non-alphabetic.
//gg

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("hello world"));  
console.log(ucFirst("123 abc"));      


  function filteringm (str){

var lowstr = str.toLowerCase();

return lowstr.includes ("Vivi") || lowstr.includes ("Lili");

  }

  console.log (filteringm ("Vivi"))
  








  

