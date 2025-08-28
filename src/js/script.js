"use strict";
// import excuse componants from arrays
import { who, action, what, when } from "./excuses.js";

// grab all needed html elements
const generateExcuseBtn = document.getElementById("generate-excuse-button");
const whoText = document.getElementById("who-text");
const actionText = document.getElementById("action-text");
const whatText = document.getElementById("what-text");
const whenText = document.getElementById("when-text");

// This is a reusable "utility function" that'll take in which element to update
// and the array to use to update it
function generateText(element, array) {
  // this variable will be a random number to get a random value from the array
  let index = Math.floor(Math.random() * array.length);
  // we update the content of the element with the following
  element.innerHTML = array[index] + " "; //add a space between each element
}

// call all of the funcitons
generateText(whoText, who);
generateText(actionText, action);
generateText(whatText, what);
generateText(whenText, when);

// Add functionality to the button
generateExcuseBtn.addEventListener("click", () => {
  generateText(whoText, who);
  generateText(actionText, action);
  generateText(whatText, what);
  generateText(whenText, when);
});
