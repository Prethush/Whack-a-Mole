const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft = document.getElementById("time-left");
const start = document.querySelector(".start");
let score = document.getElementById("score");
const reset = document.querySelector(".reset");

var timer = null, timerId = null;

let result = 0;
let currentTime = timeleft.textContent;

function randomSquare() {
    if(currentTime === 0) {
        clearInterval(timer);
    }
    square.forEach((className) => {
        className.classList.remove("mole");
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    // Assigning the id of randomPosition to hitPosition

    hitPosition = randomPosition.id;
}

square.forEach((id) => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
    
})





function countDown() {
    currentTime--;
    timeleft.textContent = currentTime;

    if(currentTime === 0) {
        console.log(timerId);
        clearInterval(timerId);
        alert(`GAME OVER! YOUR FINAL SCORE IS ${result}`);
    }
}


start.addEventListener("click", handleClick);

function handleClick(event) {
    timer = setInterval(randomSquare, 1000);
    timerId = setInterval(countDown, 1000);
}

reset.addEventListener("click", () => {
    alert("Are you sure you want to reset the game?");
    location.reload();
})