function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  console.log(title, width, height);
  console.log(items);
}
let options = { title: "My Menu", items: ["Item1", "Item2"] };
showMenu(options);
