let sayMixin = {
  say(phrase) {
    console.log(phrase); // This logs the phrase
    this.phrase = phrase; // Sets phrase property
  },
};

let sayHiMixin = {
  sayHi() {
    super.say(`Hello ${this.name}`); // Calls the 'say' method from sayMixin
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  },
};

// Inherit sayMixin in sayHiMixin
Object.setPrototypeOf(sayHiMixin, sayMixin);

class User {
  constructor(name) {
    this.name = name;
  }
}

// Set the prototype of User to include sayHiMixin, which already has say() from sayMixin
Object.setPrototypeOf(User.prototype, sayHiMixin);

let user = new User("Dude");
user.sayHi(); // Should log "Hello Dude"
user.sayBye(); // Should log "Bye Dude"
user.say("Hi, I'm a user"); // Should log "Hi, I'm a user" and set the phrase property to "Hi, I'm a user"
