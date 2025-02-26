class CoffeeMachine {
  #waterLimit = 200; // private property

  #fixWaterAmount(value) {
    // private method
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
    return value;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.setWaterAmount(100); // ✅ Allowed
console.log(coffeeMachine.#waterLimit); // ❌ ERROR: Private property
