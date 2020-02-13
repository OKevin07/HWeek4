var mainEl = document.getElementById("main");
var timeEl = document.getElementById("time");
var button = document.getElementById("myBtn");
var quesArray = ["What is the HTML tag under which one can write the JavaScript code?", "Which of the following is the correct syntax to display \"GeeksforGeeks\" in an alert box using JavaScript?", "What is the correct syntax for referring to an external script called \“geek.js\”?",
    "The external JavaScript file must contain <script> tag True or False?", "What is the syntax for creating a function in JavaScript named as Geekfunc?", "How is the function called in JavaScript?", "What is the correct syntax for adding comments in JavaScript?", "What is the JavaScript syntax for printing values in Console?",
    "How to initialize an array in JavaScript?", "Which function of an Array object calls a function for each element in the array?", "JavaScript is ________ language."];
const newLocal = 1000;
var testArray = [{ question: "", answers: ["What is the HTML tag under which one can write the JavaScript code?",, "", ""] }];
//TIMER FUNCTION 
function countDown() {
    var timeRem = 60;
    var timeInt = setInterval(function () {
        timeRem--;
        timeEl.textContent = timeRem + "Time Left";
        if (timeRem === 0) {
            clearInterval(timeInt);
            alert("GAME OVER")
        }
    }
, 1000)
};

function reDirect (){
location.replace("file:///C:/Users/Owner/Desktop/HWeek4/questionaire.html")

}

button.addEventListener("click", countDown);
button.addEventListener("click",re)
// QUESTIONNAIRE- length-1=length 
function qSelect() {
    var rng = Math.floor(Math.random() * quesArray.length);
    var ranQ = quesArray[rng];
    quesArray.splice(rng, 1)
    return ranQ;
}
console.log(quesArray);
for (var i = 0; i < 11; i++) {
    console.log(qSelect());

}
