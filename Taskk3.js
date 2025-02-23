// Problem 3 (Intermediate):  
// You are given an array of objects where each object represents a product with a `category` and `price`. 
// Write a function that groups the products by category and calculates the total price for each category. 
//
// Example input:
// const products = [
//   { category: "Electronics", price: 100 },
//   { category: "Clothing", price: 50 },
//   { category: "Electronics", price: 200 },
//   { category: "Clothing", price: 80 },
//   { category: "Books", price: 30 }
// ];
//
// Expected output:
// {
//   Electronics: 300,
//   Clothing: 130,
//   Books: 30
// }



// Solution 3: Counting word occurrences in a sentence
const countWords = (sentence) => {
    return sentence.split(" ").reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  };
  
  console.log(countWords("apple banana apple orange banana apple"));
  
  