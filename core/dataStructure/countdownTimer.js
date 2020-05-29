const Timer =require('./timer')

class CountdownTimer {
    constructor() {
        this.initialHead = new Timer({time:0});
        this.currentHead = this.initialHead;
    }

    startTimer = () => { }
    showWholeTimer = () => {
        let head = this.initialHead;
        let timerList = []
        while (head) {
            timerList.push(head.time)
            head = head.next
        }
        console.log(timerList)
    }
    showTimer = () => { }
    addTimerHorizontally = (time) => {
        const newTimer = new Timer({ time: time });
        this.currentHead.next = newTimer;
        this.currentHead = newTimer;
    }

    addTimerVertically = () => { };
}

module.exports = CountdownTimer