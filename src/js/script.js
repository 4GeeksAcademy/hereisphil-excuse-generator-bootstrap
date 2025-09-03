"use strict";
import { who, action, what, when } from "./excuses.js";

const generateExcuseBtn = document.getElementById("generate-excuse-button");
const whoText = document.getElementById("who-text");
const actionText = document.getElementById("action-text");
const whatText = document.getElementById("what-text");
const whenText = document.getElementById("when-text");


function generateText(element, array) {
  let index = Math.floor(Math.random() * array.length);
  element.innerHTML = array[index] + " "; 
}

generateText(whoText, who);
generateText(actionText, action);
generateText(whatText, what);
generateText(whenText, when);

generateExcuseBtn.addEventListener("click", () => {
  generateText(whoText, who);
  generateText(actionText, action);
  generateText(whatText, what);
  generateText(whenText, when);
});
