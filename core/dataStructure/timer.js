class Timer {
    constructor(options) {
        this.id = options.id
        this.message = options.message || 'No message'
        this.time = options.time || 0  //in minutes
        this.completed = false

    }

    update(options) {
        this.message = options.message || this.message
        this.time = options.time || this.time  //in minutes
        this.completed = options.completed || this.completed
    }

    updateMessage(msg) {
        this.message = msg || this.message
    }

    updateTime(time) {
        this.time = time || this.time
    }

    updateCompleted(isCompleted) {
        this.completed = isCompleted || this.completed
    }
}


module.exports = Timer