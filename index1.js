const CountdownTimer = require('./core/dataStructure/timerTree')
const countdownTimer = new CountdownTimer()

countdownTimer.inserTimerVertically('0')
countdownTimer.inserTimerHorizontally('0')
countdownTimer.inserTimerVertically('0-0')
countdownTimer.inserTimerHorizontally('0-0', 5)
countdownTimer.inserTimerHorizontally('0-1', 5)
countdownTimer.inserTimerVertically('0-0-0')
countdownTimer.inserTimerVertically('0-0-0')
// countdownTimer.inserTimerHorizontally('1')
// countdownTimer.inserTimerHorizontally('2')
// countdownTimer.inserTimerHorizontally('3')
// countdownTimer.inserTimerHorizontally('4')
// countdownTimer.addTimer([0], 6)
// countdownTimer.addTimer([1], 1)
// countdownTimer.addTimer([2], 2)
// countdownTimer.addTimer([3], 3)
// countdownTimer.addTimer([4], 4)
// countdownTimer.addTimer([5], 5)
// countdownTimer.addTimer([1, 0], 10)
// countdownTimer.addTimer([1, 1], 11)
// countdownTimer.addTimer([1, 2], 12)
// countdownTimer.addTimer([1, 3], 13)
// countdownTimer.addTimer([1, 1, 0], 110)
// countdownTimer.addTimer([1, 1, 1], 111)
// countdownTimer.addTimer([1, 1, 2], 112)

countdownTimer.showWholeTimer()

countdownTimer.editTimer('0-0', { time: 20, message: 'i am changed' })
console.log()
countdownTimer.showWholeTimer()
countdownTimer.deleteTimerbyID('0-0')
console.log()
countdownTimer.showWholeTimer()
// countdownTimer.showFlattenTimer()
// countdownTimer.showFlattenTimer()
// while(true){
//     let timer = countdownTimer.nextTimer()
//     if(timer){
//         console.log(timer)

//     }
//     else{
//         break
//     }
// }

// const start = () => {
//     let iscountdownFinished = true

//     let refreshId = setInterval(() => {
//         if (iscountdownFinished) {
//             let timer = this.nextTimer()
//             if (timer === undefined) {
//                 notifier.notify({
//                     title: 'Timer',
//                     message: 'All Countdown ended',
//                     appID: 'Countdown timer'
//                 });
//                 clearInterval(refreshId)
//                 return
//             }
//             iscountdownFinished = false;
//             countdownClock(timer.time, () => {
//                 this.showWholeTimer()
//                 notifier.notify({
//                     title: 'Timer',
//                     message: timer.message,
//                     appID: 'Countdown timer'
//                 });
//                 iscountdownFinished = true
//             })
//         }

//     }, 1000);
// }