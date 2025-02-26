class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  };
}

let button = new Button("Click me");
setTimeout(button.click, 1000);
