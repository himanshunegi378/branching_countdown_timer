class Timer {
    constructor(option) {
        // this.message = option['message'] !==undefined ? option.message : 'No message'
        this.time = option['time'] ? option.time : 0  //in minutes
        this.parent = undefined
        this.children = undefined
        this.next = undefined
    }

}

module.exports =  Timer