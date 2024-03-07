import Timer from "./Timer.js"

const timerInput = document.querySelector("input#time")
const startTimeBtn = document.querySelector("button#start-btn")
const stopTimeBtn = document.querySelector("button#stop-btn")

let timer

window.addEventListener("DOMContentLoaded", ()=>{
    startTimeBtn.addEventListener("click", startTimer)
    stopTimeBtn.addEventListener("click", stopTimer)
})

function startTimer(){
    console.log("starting timer ", timerInput.value)
    timer = new Timer(timerInput.value)
    timer.startTimer((newTime)=>{
        timerInput.value = newTime
    })
}
function stopTimer(){
    timer.stopTimer()
}