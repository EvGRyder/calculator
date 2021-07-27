const equal = document.querySelector('#equal')
const result = document.querySelector('#result')
const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

const clear = document.querySelector('#clear')
const plus = document.querySelector('#plus')
const multiply = document.querySelector('#multiply')
const subtract = document.querySelector('#subtract')
const divide = document.querySelector('#divide')

currentEntry = ""
let stringResult = []

equal.addEventListener('click', () => {
    stringResult.push(currentEntry)


    while(stringResult.length > 2) {
        let [num1, operator, num2] = [
            parseInt(stringResult[0]), 
            stringResult[1], 
            parseInt(stringResult[2])
        ]
        curr = operate(num1, num2, operator)
        stringResult = stringResult.splice(2)
        stringResult[0] = curr
    }
    result.textContent = stringResult[0]
    currentEntry = ""
    }
)

function operate(num1, num2, operator) {
    if (operator == "+") return num1 + num2
    if (operator == "-") return num1 - num2
    if (operator == "*") return num1 * num2
    if (operator == "/") {
        if (num2 == 0) return "CANNOT DIVIDE BY ZERO"
        else return (num1 / num2).toFixed(2)
    }
}

plus.addEventListener('click', () => {
    stringResult.push(currentEntry)
    currentEntry = ""

    result.textContent = result.textContent + ' + '
    stringResult.push('+')
})

multiply.addEventListener('click', () => {
    stringResult.push(currentEntry)
    currentEntry = ""

    result.textContent = result.textContent + ' * '
    stringResult.push('*')
})

subtract.addEventListener('click', () => {
    stringResult.push(currentEntry)
    currentEntry = ""

    result.textContent = result.textContent + ' - '
    stringResult.push('-')
})

divide.addEventListener('click', () => {
    stringResult.push(currentEntry)
    currentEntry = ""

    result.textContent = result.textContent + ' / '
    stringResult.push('/')
})

clear.addEventListener('click', () => {
    result.textContent = ""
    currentEntry = ""
    stringResult = []
})

//  NUMBAS //

zero.addEventListener('click', () => {
    result.textContent = result.textContent + '0'
    currentEntry += 0
})

one.addEventListener('click', () => {
    result.textContent = result.textContent + '1'
    currentEntry += 1
})

two.addEventListener('click', () => {
    result.textContent = result.textContent + '2'
    currentEntry += 2
})

three.addEventListener('click', () => {
    result.textContent = result.textContent + '3'
    currentEntry += 3
})

four.addEventListener('click', () => {
    result.textContent = result.textContent + '4'
    currentEntry += 4
})

five.addEventListener('click', () => {
    result.textContent = result.textContent + '5'
    currentEntry += 5
})

six.addEventListener('click', () => {
    result.textContent = result.textContent + '6'
    currentEntry += 6
})

seven.addEventListener('click', () => {
    result.textContent = result.textContent + '7'
    currentEntry += 7
})

eight.addEventListener('click', () => {
    result.textContent = result.textContent + '8'
    currentEntry += 8
})

nine.addEventListener('click', () => {
    result.textContent = result.textContent + '9'
    currentEntry += 9
})