const Timer = require('./timer')
const countdownClock = require('../../timer')
const notifier = require('node-notifier');

class CountdownTimer {
    constructor() {
        this.timer = {}
        this.depth = 0
        this.index = [0]
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
                if (t[i + 1]) {
                    t[i] = { timer: new Timer({ message: 'system created', time: time }) }
                    t = t[i]
                }
                else {
                    t[i] = { timer: new Timer({ message: msg, time: time }) }

                }
            }
            iterations++
        }
    }

    start = () => {
      let  iscountdownFinished = true

        let refreshId = setInterval(() => {
            if (iscountdownFinished) {
                let timer = this.nextTimer()
                if (timer === undefined) {
                    notifier.notify({
                        title: 'Timer',
                        message: 'All Countdown ended',
                        appID: 'Countdown timer'
                    });
                    clearInterval(refreshId)
                    return
                }
                iscountdownFinished = false;
                countdownClock(timer.time, () => {
                    this.showWholeTimer()
                    notifier.notify({
                        title: 'Timer',
                        message: timer.message,
                        appID: 'Countdown timer'
                    });
                    iscountdownFinished = true
                })
            }

        }, 1000);
    }
    nextTimer = () => {
        let t = this.timer
        while (true) {
            //have child
            if (this.haveChild(t[this.index[this.depth]])) {
                t = t[this.index[this.depth]]
                this.depth++
                this.index[this.depth] = 0
                continue
            }
            else {
                //is completed
                if (t[this.index[this.depth]].timer.completed) {
                    //is next sibling
                    if (t[this.index[this.depth] + 1]) {
                        //go to next sibling
                        this.index[this.depth]++
                    }
                    else {
                        if (this.depth === 0) {
                            // it means all timer has finsihed
                            return undefined
                        }
                        else {
                            //go one leve up
                            this.depth--
                            continue
                        }
                    }
                }
                else {
                    t[this.index[this.depth]].timer.completed = true
                    return t[this.index[this.depth]].timer
                }
            }
        }
    }
    haveChild = (timer) => {
        if (timer[0]) {
            return true
        }
        else {
            return false
        }
    }


    pause = () => {

    }

    reset = () => {

    }




}

module.exports = CountdownTimer