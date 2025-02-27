let options = { size: { width: 100, height: 200 }, items: ["Cake", "Donut"] };
let {
  size,

  size: { width, height },
  items: [item1, item2],
} = options;

console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
console.log(size); // Donut
