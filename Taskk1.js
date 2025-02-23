// Problem 1 (Easy): 
// You have an array of user objects, and each user has a `name` and `age` property. 
// Write a function in TypeScript that filters out users younger than 18 and returns a new array with only adults.
//
// Example input:
// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 16 },
//   { name: "Charlie", age: 30 }
// ];
//
// Expected output:
// [ { name: "Alice", age: 22 }, { name: "Charlie", age: 30 } ]


const filterAdults = (users) => {
    return users.filter(user => user.age >= 18);
  };
  
  const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 30 }
  ];
  
  console.log(filterAdults(users));
  
  
