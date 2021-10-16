//questions for the game to ask
var questions = [
    {
        question: "JavaScript decides the ____________ of web pages.",
        options: ["Design", "Structure", "Behavior",],
        correctAnswer: "Behavior"
    },

    {
        question: "Is a JavaScript class an object?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    },

]

//set user score to 0 to begin the game
//var userScore = 0;

//set the question to begin at the first question from the list above
//var questionIndex = 0;


// click start quiz to start a timer and advance to the series of questions
var timer = document.querySelector("#startQuiz");
var container = document.querySelector("#container");

//

//timer set to 100 seconds at beginning of the quiz
var secondsLeft = 100;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");


//timer function at the beginning of the game
timer.addEventListener("click", function () {
 //initially set to 0
     if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time left: " + secondsLeft + " seconds";

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                gameOver();
                currentTime.textContent = "You ran out of time!!";
            }
        }, 1000);
    }

    //start quiz as the timer begins
    startQuiz();
});

//start quiz function
function startQuiz() {
    questionCycle();
}

//function to cycle through questions
function questionCycle (){
    console.log("question cycle");

}
//function for when the timer is out of time/ end of game
function gameOver() {
    currentTime.innerHTML = "";
}

