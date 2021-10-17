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

    {
        question: "What is not a valid JavaScript data type?",
        options: ["a String", "a Number", "an Array", "undefined"],
        correctAnswer: "undefined"
    }

]


//set the question to begin at the first question from the list above
var questionIndex = 0;

//keep track of user score 
//ar score = 10;
//penalty for getting question wrong
//var penalize = 10;


// click start quiz to start a timer and advance to the series of questions
var timer = document.querySelector("#startQuiz");
var container = document.querySelector("#container");
var quizQuestions = document.querySelector("#quizQuestions");
var currentTime = document.querySelector("#currentTime");
var quizChoices = document.querySelector("#quizChoices");
//answer buttons

//timer set to 100 seconds at beginning of the quiz
var secondsLeft = 60;
// Holds interval time
var holdInterval = 0;

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
function startQuiz(questionIndex) {
//function to cycle through questions when the Start Quiz button is clicked

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
       listItem.addEventListener("click", (decide));
       //function for clicking answer choices
       //if button is clicked and answer matches add time to timer
       //if button is clicked and answer is wrong remove time from timer
   
    })
    //console.log(questions);


}
function decide(event) {
    console.log("an option button clicked");

    //if listItem === questions options correct Answer then increment score
    //create element to be targeted
    var element = event.target;
    
    if (element.matches("li")) {



        //if it is right
        if (element.textContent == questions[questionIndex].correctAnswer) {
            secondsLeft++;
        } else {
            secondsLeft = secondsLeft - 10;
        }
        }

    }
    




//function for when the timer is out of time/ end of game
//appends the last page
function gameOver() {
    currentTime.innerHTML = "";
    quizQuestions.innerHTML = "";

    //new header for 'game over screen'
    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "GAME OVER!"

    quizQuestions.appendChild(newH1);

    //new <p>
    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");

    quizQuestions.appendChild(newP);

    //seconds remaining is the score
    if (secondsLeft >= 0) {
        //second new paragraph
        var newP2 = document.createElement("p");
        clearInterval(holdInterval);
        newP.textContent = "Your score is: " + secondsLeft;

        quizQuestions.appendChild(newP2);
    };

// Label
var userName = document.createElement("label");
userName.setAttribute("id", "userName");
userName.textContent = "Type your name here: ";

quizQuestions.appendChild(userName);

// input
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "name");
createInput.textContent = "";

quizQuestions.appendChild(createInput);

// submit
var createSave = document.createElement("button");
createSave.setAttribute("type", "save");
createSave.setAttribute("id", "save");
createSave.textContent = "Save Score";

quizQuestions.appendChild(createSave);

// Event listener to capture initials and local storage for initials and score
createSave.addEventListener("click", function () {
    var name = createInput.value;

    if (name === null) {

        alert("you must enter a value");

    } else {
        var finalScore = {
            name: name,
            score: secondsLeft,
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        // Travels to final page
        window.location.replace("./scores.html");
    }
});

}
