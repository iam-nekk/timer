export default class Timer {
    interval = 0

    constructor(total) {
        //console.log(total)
        this.total=total
        this.max=total
    }
    //
    startTimer(callback) {
        console.log("test", this.total)
        this.interval = setInterval(()=>{          
            this.total = this.total - 1
//offset= ((max-total)*dasharray)/max
            callback(this.total)
            console.log("total", typeof this.total, this.total)
            if (this.total <= 0) clearInterval(this.interval)   
        }, 1000)
    }
    stopTimer() {
        clearInterval(this.interval)
    }
}