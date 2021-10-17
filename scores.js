// get storage

var highScore = document.querySelector("#highScore");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        var newList = document.createElement("li");
        newList.textContent = allScores[i].name + " " + allScores[i].score;
        highScore.appendChild(newList);
    }
}

