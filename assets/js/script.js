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
        answers[i].addEventListener("click", function() {

            if (this.getAttribute("data-type") === "correctAnswer") {
                incrementCorrectScore();
            } else if (this.getAttribute("data-type") === "answer") {
                incrementWrongScore();
            } else {
                
            }
        });
    }

});

function incrementCorrectScore() {

    let oldScore = parseInt(document.getElementById("correctScore").innerText);
    document.getElementById("correctScore").innerText = oldScore + 1;

}

function incrementWrongScore() {

    let oldScore = parseInt(document.getElementById("incorrectScore").innerText);
    document.getElementById("incorrectScore").innerText = oldScore + 1;

}

