//'use strict'


let counter = 0;
let answer1 = prompt("Welcome to 5 Question's Game! Please enter your name here", "");
if (answer1 === null || answer1 === "") {
    alert("Ok, let`s play: Anonimous");
} else {
    alert("Ok, " + answer1 + " this game will be a piece of cake!");
}


let answer2 = prompt("You`re playing by 5 points... Which is the best city in the world?", "");
if (answer2 === null || answer2 === "") {
    alert("I did't receive any response.");
} else if (answer2 != "Rosario") {
    alert("Sorry... You where close :(");
} else {
    alert("Well done! You have 5 points");
    counter = counter + 5;
}

let answer3 = prompt("What is the name of the longest river in the world?", "");
if (answer3 === null || answer3 === "") {
    alert("I did't receive any response.");
} else if (answer3 != "Nilo")
    alert("Sorry... Wrong answer but still have 5 points");
else {
    counter = counter + 10;
    alert("Very Well! You're stronger than He-man! Take your 10 points master of the universe!");
    alert("You have 15 points!")

}

let answer4 = prompt("What is the country that is shaped like a boot?", "");
if (answer4 === null || answer4 === "") {
    alert("I did't receive any response.");
} else if (answer4 != "Italy") {
    alert("Sorry... Wrong answer but still have " + contador + " points");
} else {
    counter = counter + 10;
    alert("Great! You have " + contador + "  points!");
}