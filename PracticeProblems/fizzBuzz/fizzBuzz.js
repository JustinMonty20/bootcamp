function fizzBuzz(numbers) {
    return numbers.map(myFunction).join('')
}

function myFunction(num){
    if(num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz'
    } else if(num % 3 === 0){
        return 'fizz'
    } else if(num % 5 === 0){
        return 'buzz'
    }
}


module.exports = fizzBuzz;