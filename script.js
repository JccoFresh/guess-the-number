/*
const friendName = "bread";
const instructorName = "waz poppin";
const programName = "NYOT";
const isCoding = true;
const numPizzaSlicesIAte = 1;
const numPizzaSlicesFriendAte = 3;
console.log("Let's get this " + friendName + " and " + instructorName + " my dude, we just ate " + (numPizzaSlicesIAte + numPizzaSlicesFriendAte) + " slices of pizza!");
function d(x) {
    return x;
}
console.log(d("yo waz poppin"));

function calculateSum(numOne, numTwo) {
    console.log(numOne + numTwo);
}
calculateSum(31,13/2.23);

function callKitten(kittenName) {
    console.log("Come here, " + kittenName + "!");
}
callKitten('Fluffy')

function addNumbers(a,b) {
    console.log(a+b);
}
addNumbers(5,7);
addNumbers(9,12);


function sayHi(name) {
    return "Hi, " + name;
}
console.log(sayHi('Jeff'));


function toCelsius(F) {
    if(isNaN(F)==false) {
        let celsius = ((F - 32)*5)/9;
        console.log(celsius + " C\u00B0");
    } else {
        console.log("Please type a numerical value!");
    }
}
function toFahrenheit(C) {
    if(isNaN(C)==false) {
        let fahrenheit = ((C*9)/5)+32;
        console.log(fahrenheit + " F\u00B0");
    } else {
        console.log("Please type a numerical value!");
    }
}
toCelsius(32);
toFahrenheit(0);

function pluralize(num, word) {
    if(isNaN(num) ==true) {
        console.log("Please type a numerical value!");
    } else if(typeof word != "string") {
        console.log("Please type a string!");
    } else if(typeof word != "string" && isNaN(num) ==true) {
        console.log("Please type an actual string and a numerical value!");
    } else {
    let plural = word + "s"
    console.log(num + " "+ plural);
    }
}
pluralize(7,"cat");
pluralize("sd", 7);
*/
let targetNum = Math.floor((Math.random()*100)+1);
let response = document.getElementById("success");
let input = document.getElementById("number");
let box = document.getElementById("box");
let turnDisplay = document.getElementById("turnDisplay");

let change = document.getElementById("turns");
function counter() {
    let turn = parseInt(document.getElementById("turns").innerHTML);
    turn--;
    change.innerHTML = turn;
  if(response.innerHTML == " You got it!") {
      turnDisplay.style.display = "none";
      response.innerHTML = " You Win!";
  }  else if(change.innerHTML == 0 && (response.innerHTML == " Too High!" || response.innerHTML== " Too Low!")){
      turnDisplay.style.display = "none";
      response.innerHTML = " You lose!"
    }
}

function checkNum () {
    let guess = parseInt(document.getElementById('number').value);
    console.log(targetNum);
    if(guess == targetNum) {
        response.innerHTML = " You got it!";
        response.style.color = "green";
        input.value = "";
    } else if(guess > targetNum) {
        response.innerHTML = " Too High!";
        response.style.color = "red";
        input.value = "";
    } else if(guess < targetNum) {
        response.innerHTML = " Too Low!";
        response.style.color = "blue";
        input.value = "";
    } else {
        response.innerHTML = " Type a number!";
        response.style.color = "yellow";
        input.value = "";
    }
}

