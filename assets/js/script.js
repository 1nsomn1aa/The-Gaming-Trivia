type = "application/javascript"


// Page Redirects
function home() {
    window.location.href = "/index.html";
}

function topicStart() {
    window.location.href = "/topic.html";
}

function arcadeStart() {
    window.location.href = "/arcadegame.html";
}

function fpsStart() {
    window.location.href = "/fpsgame.html";
}

function simStart() {
    window.location.href = "/simgame.html";
}

function upcomingStart() {
    window.location.href = "/upcominggame.html";
}

// Topic Selection (Show/Hide)
function show() {

    let showhide4 = document.getElementById("description4");
    let showhide3 = document.getElementById("description3");
    let showhide2 = document.getElementById("description2");
    let showhide = document.getElementById("description");

    if (showhide.style.display === "none") {
        showhide.style.display = "flex";
    } else {
        showhide.style.display = "none";
    }

    if (showhide2.style.display === "none") {
        showhide2.style.display = "none";
    } else {
        showhide2.style.display = "none";
    }

    if (showhide3.style.display === "none") {
        showhide3.style.display = "none";
    } else {
        showhide3.style.display = "none";
    }

    if (showhide4.style.display === "none") {
        showhide4.style.display = "none";
    } else {
        showhide4.style.display = "none";
    }
}

function show2() {

    let showhide4 = document.getElementById("description4");
    let showhide3 = document.getElementById("description3");
    let showhide2 = document.getElementById("description2");
    let showhide = document.getElementById("description");

    if (showhide.style.display === "none") {
        showhide.style.display = "none";
    } else {
        showhide.style.display = "none";
    }

    if (showhide2.style.display === "none") {
        showhide2.style.display = "flex";
    } else {
        showhide2.style.display = "none";
    }

    if (showhide3.style.display === "none") {
        showhide3.style.display = "none";
    } else {
        showhide3.style.display = "none";
    }

    if (showhide4.style.display === "none") {
        showhide4.style.display = "none";
    } else {
        showhide4.style.display = "none";
    }
}

function show3() {

    let showhide4 = document.getElementById("description4");
    let showhide3 = document.getElementById("description3");
    let showhide2 = document.getElementById("description2");
    let showhide = document.getElementById("description");

    if (showhide.style.display === "none") {
        showhide.style.display = "none";
    } else {
        showhide.style.display = "none";
    }

    if (showhide2.style.display === "none") {
        showhide2.style.display = "none";
    } else {
        showhide2.style.display = "none";
    }

    if (showhide3.style.display === "none") {
        showhide3.style.display = "flex";
    } else {
        showhide3.style.display = "none";
    }

    if (showhide4.style.display === "none") {
        showhide4.style.display = "none";
    } else {
        showhide4.style.display = "none";
    }
}

function show4() {

    let showhide4 = document.getElementById("description4");
    let showhide3 = document.getElementById("description3");
    let showhide2 = document.getElementById("description2");
    let showhide = document.getElementById("description");

    if (showhide.style.display === "none") {
        showhide.style.display = "none";
    } else {
        showhide.style.display = "none";
    }

    if (showhide2.style.display === "none") {
        showhide2.style.display = "none";
    } else {
        showhide2.style.display = "none";
    }

    if (showhide3.style.display === "none") {
        showhide3.style.display = "none";
    } else {
        showhide3.style.display = "none";
    }

    if (showhide4.style.display === "none") {
        showhide4.style.display = "flex";
    } else {
        showhide4.style.display = "none";
    }
}

// Game

// Check if answer is correct and increment score

document.addEventListener("DOMContentLoaded", function () {

    let answers = document.getElementsByTagName("div");
    
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {

            if (this.getAttribute("data-type") === "correctAnswer") {
                incrementCorrectScore();
                Swal.fire({
                    title: "Correct! ",
                    text: "+1 To Gryffindor",
                    icon: "success"
                });
                displayNextQuestion();
                incrementQuestionNumber();
            } else if (this.getAttribute("data-type") === "answer") {
                incrementWrongScore();
                Swal.fire({
                    title: "Oops :/",
                    text: "+1 to Slytherin...",
                    icon: "error"
                });
                displayNextQuestion();
                incrementQuestionNumber();                
            } else {
            
            }
        });
    }
});

// Increment correct score

function incrementCorrectScore() {

    let oldCorrectScore = parseInt(document.getElementById("correctScore").innerText);
    document.getElementById("correctScore").innerText = oldCorrectScore + 1;
}

// Increment incorrect score

function incrementWrongScore() {

    let oldIncorrectScore = parseInt(document.getElementById("incorrectScore").innerText);
    document.getElementById("incorrectScore").innerText = oldIncorrectScore + 1;

}

// Increment question number

function incrementQuestionNumber() {
    let questionNumber = document.getElementById("questionNumber");
    var currentNumber = parseInt(questionNumber.innerHTML);
    questionNumber.innerHTML = currentNumber + 1;
}


// Display next question / hide last question



function displayNextQuestion() {

    let showhide7 = document.getElementById("topic");
    let showhide6 = document.getElementById("arcade-end");
    let showhide5 = document.getElementById("arcade5");
    let showhide4 = document.getElementById("arcade4");
    let showhide3 = document.getElementById("arcade3");
    let showhide2 = document.getElementById("arcade2");
    let showhide1 = document.getElementById("arcade1");

    if (showhide1.style.display === "") {
        showhide1.style.display = "none";
        showhide2.style.display = "flex";
    } else if (showhide2.style.display === "flex") {

        showhide3.style.display = "flex";
        showhide2.style.display = "none";

    } else if (showhide3.style.display === "flex") {

        showhide4.style.display = "flex";
        showhide3.style.display = "none";

    } else if (showhide4.style.display === "flex") {
        showhide5.style.display = "flex";
        showhide4.style.display = "none";

    } else if (showhide5.style.display === "flex") {

        showhide7.style.display = "none";
        showhide6.style.display = "flex";
        showhide5.style.display = "none";
        finalScore();

    } else {
        // No action needed if none of the elements are displayed.
    }
}

// Display the achieved score

function finalScore() {

    let correctScore = document.getElementById("correctScore");
    let incorrectScore = document.getElementById("incorrectScore");

    let finalCorrectScore = correctScore.textContent;
    let finalIncorrectScore = incorrectScore.textContent;


    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = `Your score is ${finalCorrectScore} correct and ${finalIncorrectScore} incorrect.`;
}