const notifier = require('node-notifier');

const input = require('./input')
const inputParser = require('./inputParser')
const timer = require('./timer')

const userInput = input.question()
const conuntdownTimerList = inputParser(userInput)
let iscountdownFinished = true


let refreshId = setInterval(() => {
    if (iscountdownFinished) {
        let time = conuntdownTimerList.shift()
        if (time === undefined) {
            notifier.notify({
                title: 'Timer',
                message: 'All Countdown ended',
                appID: 'Countdown timer'
            });
            clearInterval(refreshId)
            return
        }
        iscountdownFinished = false;
        timer(time, () => {
            console.log(conuntdownTimerList)
            notifier.notify({
                title: 'Timer',
                message: 'next task',
                appID: 'Countdown timer'
            });
            iscountdownFinished = true
        })
    }

}, 1000);
