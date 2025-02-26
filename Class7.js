class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs at speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stops.`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // Call Animal's constructor
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // Call Animal's stop()
    this.hide(); // Add extra behavior
  }
}

let rabbit = new Rabbit("Bunny", 15);

rabbit.run(10); // Bunny runs at speed 10.
rabbit.stop(); // Bunny stops. Bunny hides!
console.log(rabbit.earLength); // 15
