class Timer {
    constructor(option) {
        this.message = option.message || 'No message'
        this.time = option.time || 0  //in minutes
        this.completed = false
        
    }

}

module.exports = Timer