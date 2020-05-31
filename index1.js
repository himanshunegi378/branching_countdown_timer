const CountdownTimer =require('./core/dataStructure/timerTree')
const countdownTimer = new CountdownTimer()

countdownTimer.addTimer([0],6)
// countdownTimer.addTimer([1],1)
countdownTimer.addTimer([2],2)
countdownTimer.addTimer([3],3)
countdownTimer.addTimer([4],4)
countdownTimer.addTimer([5],5)
countdownTimer.addTimer([1,0],10)
// countdownTimer.addTimer([1,1],11)
countdownTimer.addTimer([1,2],12)
countdownTimer.addTimer([1,3],13)
countdownTimer.addTimer([1,1,0],110)
countdownTimer.addTimer([1,1,1],111)
countdownTimer.addTimer([1,1,2],112)
// countdownTimer.showWholeTimer()
// while(true){
//     let timer = countdownTimer.nextTimer()
//     if(timer){
//         console.log(timer)
        
//     }
//     else{
//         break
//     }
// }
countdownTimer.start()