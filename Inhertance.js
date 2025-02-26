class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

///////////////////////////////////////////////////////////////////////////

class liquid {
  constructor(name) {
    this.name = name;
  }

  TypeLiquid(type) {
    this.type = type;
    console.log(`the type of liquid is ${this.type}`);
  }
}

class Water extends liquid {
  AmountOfWater(Amount) {
    this.Amount = Amount;
    console.log(`the amount of water is ${this.Amount}`);
  }
}

let water = new Water();

water.AmountOfWater("10 L");
water.TypeLiquid("Juice");
