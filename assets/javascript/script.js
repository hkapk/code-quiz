//questions for the game to ask
var questions = [
    {
        question: "JavaScript decides the ____________ of web pages.",
        options: [" Design", " Structure", " Behavior",],
        correctAnswer: "Behavior"
    },

    {
        question: "Is a JavaScript class an object?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    },

]


//set the question to begin at the first question from the list above
var questionIndex = 0;



// click start quiz to start a timer and advance to the series of questions
var timer = document.querySelector("#startQuiz");
var container = document.querySelector("#container");
var quizQuestions = document.querySelector("#quizQuestions");
var currentTime = document.querySelector("#currentTime");
var quizChoices = document.querySelector("#quizChoices");
//answer buttons

//timer set to 100 seconds at beginning of the quiz
var secondsLeft = 100;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var newList = document.createElement("ul");


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
    startQuiz(questionIndex);
});

//start quiz function
function startQuiz() {
    questionCycle();
}

//function to cycle through questions when the Start Quiz button is clicked
function questionCycle (){
    //clears content of the start quiz
    quizQuestions.innerHTML = "";
    newList.innerHTML = "";

   for (var i = 0; i < questions.length; i++) {
       var questionOption = questions[questionIndex].question;
       var answerOptions = questions[questionIndex].options;
       quizQuestions.textContent = questionOption;
   }


//display the list of possible answers
   answerOptions.forEach(function (newItem) {
       //create variable called listItem and make it a list Element
       var listItem = document.createElement("li");
       listItem.textContent = newItem;
       quizQuestions.appendChild(newList);
       newList.appendChild(listItem);
       //listItem.addEventListener("click", alert("a choice as clicked"));

   })

   
    console.log(questions);
}
//function for when the timer is out of time/ end of game
function gameOver() {
    currentTime.innerHTML = "";
}

