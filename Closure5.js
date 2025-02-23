function createButtonHandler(buttonId) {
  return function () {
    console.log(`Button with id ${buttonId} clicked!`);
  };
}

const buttonHandler1 = createButtonHandler("submit");
const buttonHandler2 = createButtonHandler("cancel");

buttonHandler1();
buttonHandler2();
