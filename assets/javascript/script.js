// click start quiz to start a timer and advance to the series of questions
var timer = document.querySelector("#startQuiz");

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
    //alert("begin quiz");
});


//function for when the timer is out of time/ end of game
function gameOver() {
    currentTime.innerHTML = "";
}
