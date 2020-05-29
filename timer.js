const timer = (time,cb)=>{
    setTimeout(() => {
        cb()
    }, time*60*1000);
}

module.exports = timer