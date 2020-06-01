const Timer = require('./timer')
const { v1: uuidv1 } = require('uuid');

class CountdownTimer {
    constructor() {
        this.HEAD = {}
        this.currentHead = {}
    }

    createTimerTree = (opts) => {
        this.HEAD = new Timer({ opts })
    }

    insertTimerToRight = (id, opts) => {

        let timer = this.findTimer(id)
        let newTimer = new Timer(opts)
        if (timer.next) {
            let nexTimer = timer.next
            timer.next = newTimer
            newTimer.next = nexTimer
            newTimer.previous = timer
            nexTimer.previous = newTimer
        }
        else {
            timer.next = newTimer
            newTimer.previous = timer
        }
    }

    insertTimerBelow = (id, opts) => {

    }


    findTimer = (targetId) => {
        //assumed this.HEAD is not empty
        let currentHead = this.HEAD
        while (true) {
            //does currentHead match with targetId
            if (currentHead.id === targetId) {
                return currentHead
            }
            else {
                //does node have child
                if (currentHead.child) {
                    currentHead = currentHead.child
                } else {
                    //does node have next
                    if (currentHead.next) {
                        currentHead = currentHead.next
                    }
                    else {
                        if (currentHead.parent) {
                            currentHead = currentHead.parent
                        }
                        else {
                            return undefined
                        }
                    }
                }
            }
        }
    }
}

module.exports = CountdownTimer