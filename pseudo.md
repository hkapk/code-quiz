Rules
-When the start game button is clicked a timer will begin.
-If you answer a question wrong, points (time) will be deducted.
-If you answer a questions right, points (time) will be added to your score.
-Once all questions are answered the game ends and your score is recorded, along with your initials.
-Highest score wins!

Pseudocode

1. Start the game (with a button)
2. Start the timer (60 seconds)
3. Display time remaining
4. Display the question
5. Display 'yes' or 'no' for the question
6. User will click 'yes' or 'no'
7. Check if 'yes' or 'no' is correct or incorrect.
   a. if correct add time (add 5 seconds to timeRemaining)
   b. if incorrect deduct 5 seconds from timeRemaining
8. Update display to show remaining time
9. endGame when time remaining === 0 || remainingQuestions === 0
10. userScore === timeRemaining at endGame
11. saveGame to enter userInitials and then display userInitials and userScore
12. save the score and username with localStorage
