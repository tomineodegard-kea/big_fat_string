`use strict`;

const inputText = document.querySelector("#input_text");
const outputText = document.querySelector("#output_text");
const operator = document.querySelector("#operator");
const generateBtn = document.querySelector("#generate");

window.addEventListener("DOMContentLoaded", start);

function start() {
  generateBtn.addEventListener("click", generate);
}

function generate() {
  let selectFromDropdown = operator.value;
  let inputValue = inputText.value;

  if (selectFromDropdown === "1") {
    outputText.value = inputValue.charAt(0).toUpperCase() + inputValue.substring(1).toLowerCase();
  } else if (selectFromDropdown === "2") {
    outputText.value = inputValue.substring(inputValue.indexOf(0), inputValue.indexOf(" "));
  } else if (selectFromDropdown === "3") {
    outputText.value = inputValue.substring(inputValue.indexOf(0), inputValue.indexOf(" ")).length + " letters";
  } else if (selectFromDropdown === "4") {
    outputText.value = inputValue.substring(inputValue.indexOf(" "), inputValue.lastIndexOf(" "));
  } else if (selectFromDropdown === "5") {
    outputText.value = inputValue;
  } else if (selectFromDropdown === "6") {
    outputText.value = inputValue;
  } else if (selectFromDropdown === "7") {
    outputText.value = inputValue;
  } else if (selectFromDropdown === "8") {
    outputText.value = inputValue;
  }
}
