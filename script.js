function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

let previousValue = "";
let displayValue = "";
let operator = "";

function populateDisplay() {
  const display = document.querySelector(".display");
  const btnNum = document.querySelectorAll("#num");
  btnNum.forEach((item) => {
    item.addEventListener("click", (e) => {
      displayValue = displayValue + e.target.innerText;
      display.textContent = displayValue;
      console.log(displayValue);
    });
  });

  const operator = document.querySelectorAll("#operator");
  operator.forEach((item) => {
    item.addEventListener("click", (e) => {
      previousValue = displayValue;
      operator = e.target.innerText;
      displayValue = "";
    });
  });

  operator.addEventListener("click", (e) => {});

  const equals = document.querySelector("#equals");
  //   const btn2 = document.querySelector("#two");
  //   const btn3 = document.querySelector("#three");
  //   const btn4 = document.querySelector("#four");
  //   const btn5 = document.querySelector("#five");
  //   const btn6 = document.querySelector("#six");
  //   const btn7 = document.querySelector("#seven");
  //   const btn8 = document.querySelector("#eight");
  //   const btn9 = document.querySelector("#nine");
  //   const btn0 = document.querySelector("#zero");
  //display.textContent = displayValue;
}

let a = displayValue;

populateDisplay();
