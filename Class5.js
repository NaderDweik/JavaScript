// Class Fields (Properties inside Classes)
// We can directly define properties in a class without using a constructor:

class User {
  name = "Nader";

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let user1 = new User();
user1.sayHi();
