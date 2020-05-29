const parser = (input)=>{
    var numbers = input.split('+')
    numbers = numbers.map((element)=>{return parseInt(element)})
    return numbers
}

module.exports = parser