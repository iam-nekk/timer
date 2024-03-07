export default class Timer {
    total = 0
    interval = 0

    constructor(total) {
        //console.log(total)
        this.total=total
    }
    //
    startTimer(callback) {
        console.log("test", this.total)
        this.interval = setInterval(()=>{          
            this.total = this.total - 1
            callback(this.total)
            console.log("total", typeof this.total, this.total)
            if (this.total <= 0) clearInterval(this.interval)   
        }, 1000)
    }
    stopTimer() {
        clearInterval(this.interval)
    }
}