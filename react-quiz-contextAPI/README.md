# React Quiz

Used useEffect to retrieve data from a fake API I created in package.json. Handled all the state with a useReducer hook

The app starts with a welcome screen. Click start to begin. app tracks progress with a progress bar, tells you you are on X/Yquestions, and has a score accumulator. You are given a question with 4 mulitple choice answers. Clicking an answer will highlight the correct answer in turquoise, and the wrong answers in orange. clicking the correct answer will award points. after answering the "next" button will appear- click to advance to the next question. There is also a timer- time is determined by number of questions \* 30 seconds per qeustion. Once the timer reaches zero the quiz will immediately end.

After answering all questions the quiz will finish giving you your score out of X points along with the percentage. Also tracks the highscore. There is a reset button to set all state back to the initial (highscore, and questions state are remain), and start the quiz over.
