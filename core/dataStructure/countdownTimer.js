const Timer = require('./timer')

class CountdownTimer {
    constructor() {
        this.timer = {}
        this.initialHead = new Timer({ time: 0 });
        this.currentHead = this.initialHead;
    }

    startTimer = () => { }
    showWholeTimer = () => {
        console.log(JSON.stringify(this.timer))
    }
    showTimer = () => { }
    addTimerHorizontally = (index, time, msg) => {

        const newTimer = new Timer({ time: time, message: msg });
        this.currentHead.next = newTimer;
        this.currentHead = newTimer;
    }

    addTimerVertically = (index, time, msg) => {

    };

    addTimer = (index, time, msg) => {
        let length = index.length
        let iterations = 0;
        let t = this.timer
        while (iterations < length) {
            let i = index.shift()

            if (t[i]) {
                t = t[i]
            }
            else {
                t[i] = { timer: new Timer({ message: msg, time: time }) }
            }
            iterations++
        }
    }

}

module.exports = CountdownTimer