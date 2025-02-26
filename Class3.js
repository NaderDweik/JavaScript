class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name is too short!");
      return;
    }
    this._name = newName;
  }
}

let user1 = new User("John");
console.log(user1.name); // John

user1.name = "John";
user1.name = "Al"; // Name is too short!
user1.name = "Alice"; // Works fine

console.log(user1.name); // Alice

//////////////////////////////////////////////////////////////////////////
