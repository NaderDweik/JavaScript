class ToUpperCase {
  constructor(TheName) {
    this._TheName = TheName.toUpperCase(); // Convert to uppercase immediately
  }

  get name() {
    return this._TheName;
  }

  set name(newName) {
    if (newName.length < 5) {
      console.log("Name is too short: " + newName.toUpperCase()); // Fixed method
      return;
    }
    this._TheName = newName.toUpperCase();
  }
}

// Create a new instance
let user3 = new ToUpperCase("ali Mohammad");
console.log(user3.name);

user3.name = "Alia";

user3.name = "Aliaa";
console.log(user3.name);
