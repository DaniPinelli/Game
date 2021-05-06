'use strict'



let player = prompt("Welcome to 5 Question's Game! Please enter your name here: ", "");
if (player === null || player === "") {
    alert("Ok, let`s play Anonimous!");
} else {
    alert("Ok, " + player + " this game will be a piece of cake!");
}


let answer1 = prompt("You`re playing by 5 points... Which is the best city in the world?", "");
let counter = 0;
let answer1Lower = answer1.toLowerCase();
if (answer1Lower === null || answer1Lower === "") {
    alert("I did't receive any response.");
} else if (answer1Lower != "rosario") {
    alert("Sorry... You where close :(");
} else {

    alert("Well done! You have 5 points");
    counter = counter + 5;
}

let answer2 = prompt("What is the name of the longest river in the world?", "");
let answer2Lower = answer2.toLowerCase();
if (answer2Lower === null || answer2Lower === "") {
    alert("I did't receive any response.");
} else if (answer2Lower != "nilo")
    alert("Sorry... Wrong answer but still have " + counter + " points");
else {
    counter = counter + 10;
    alert("Very Well! You're stronger than He-man! Take your 10 points master of the universe!");
    alert("You have " + counter + " points!")

}

let answer3 = prompt("What is the country that is shaped like a boot?", "");
let answer3Lower = answer3.toLowerCase();
if (answer3Lower === null || answer3Lower === "") {
    alert("I did't receive any response.");
} else if (answer3Lower != "italy") {
    alert("Sorry... Wrong answer but still have " + counter + " points");
} else {
    counter = counter + 10;
    alert("Great! You have " + counter + "  points!");
}

let answer4 = prompt("What is the city of skyscrapers?", "");
let answer4Lower = answer4.toLowerCase();
if (answer4Lower === null || answer4Lower === "") {
    alert("I did't receive any response.");
} else if (answer4Lower != "new york") {
    alert("Wrong answer :( You have " + counter + " points");
} else {
    counter = counter + 10;
    alert("Excellent! You have " + counter + "  points!");
}

let answer5 = prompt("What is the most abundant chemical element in the earth's crust?", "");
let answer5Lower = answer5.toLowerCase();
if (answer5Lower === null || answer5Lower === "") {
    alert("I did't receive any response. You finish the game with " + counter + " points");
} else if (answer5Lower != "oxygen") {
    alert("Wrong! You finish the game with " + counter + " points");
} else {
    counter = counter + 10;
    alert("Very smart! You finish the game with " + counter + "  points!");
}