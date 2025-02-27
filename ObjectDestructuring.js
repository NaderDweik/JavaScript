let options = { title: "Menu", width: 100, height: 200 };
let { title, width, height } = options;

let obj = {
  name: "John Doe",
  age: 30,
  address: { street: "123 Main St", city: "New York" },
};
let {
  name,
  age,
  address: { street, city },
} = obj;

console.log(name); // John Doe
console.log(age); // 30
console.log(street); // 123 Main St
console.log(city); // New York

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
