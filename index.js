import Timer from "./Timer.js"

const timerInput = document.querySelector("input#time")
const startTimeBtn = document.querySelector("button#start-btn")

window.addEventListener("DOMContentLoaded", ()=>{
    startTimeBtn.addEventListener("click", startTimer)
})

function startTimer(){
    console.log("starting timer ", timerInput.value)
    let timer = new Timer(timerInput.value)
    timer.startTimer((newTime)=>{
        timerInput.value = newTime
    })
}