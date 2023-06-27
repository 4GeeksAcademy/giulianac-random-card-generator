/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

// //Card is randomly generated with a timer
// window.onload = () => {
//   document.querySelector(".card").classList.add(generateRandomSuit());
//   document.querySelector(".number").innerHTML = generateRandomNumber();
//   setTimeout(() => {
//     document.querySelector(".card").classList.add(generateRandomSuit());
//     document.querySelector(".number").innerHTML = generateRandomNumber();
//   }, 10000);
// };

// //Random card is generated on click
// document.getElementById("btn").addEventListener("click", function() {
//   document.querySelector(".card").classList.add(generateRandomSuit());
//   document.querySelector(".number").innerHTML = generateRandomNumber();
// });

// //User specifies card dimensions with inputs
// let widthField = document.querySelector("#widthValue");
// let heightField = document.querySelector("#heightValue");
// widthField.addEventListener("input", adjustWidth);
// heightField.addEventListener("input", adjustHeight);
// function adjustWidth() {
//   let width = widthField.value;
//   document.querySelector(".card").style.width = width + "px";
// }
// function adjustHeight() {
//   let height = heightField.value;
//   document.querySelector(".card").style.height = height + "px";
// }

let generateRandomSuit = () => {
  let suit = ["heart", "spade", "club", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumber];
};
