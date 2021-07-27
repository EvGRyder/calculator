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
const point = document.querySelector('#point')

const back = document.querySelector('#back')
const clear = document.querySelector('#clear')
const plus = document.querySelector('#plus')
const multiply = document.querySelector('#multiply')
const subtract = document.querySelector('#subtract')
const divide = document.querySelector('#divide')

currentEntry = ""
let stringResult = []
let stringSoFar = ""

equal.addEventListener('click', enterButton)

function enterButton() {
    let arrSoFar = stringSoFar.split(" ")
    

    while(arrSoFar.length > 2) {
        let [num1, operator, num2] = [
            parseFloat(arrSoFar[0]), 
            arrSoFar[1], 
            parseFloat(arrSoFar[2])
        ]
        curr = operate(num1, num2, operator)
        arrSoFar = arrSoFar.splice(2)
        arrSoFar[0] = curr
    }
    result.textContent = arrSoFar[0]
    currentEntry = ""
}

function operate(num1, num2, operator) {
    if (operator == "+") return num1 + num2
    if (operator == "-") return num1 - num2
    if (operator == "*") return num1 * num2
    if (operator == "/") {
        if (num2 == 0) return "CANNOT DIVIDE BY ZERO"
        else return (num1 / num2).toFixed(2)
    }
}

///
plus.addEventListener('click', addPlus)
function addPlus() {
    stringResult.push(currentEntry)
    stringSoFar += ' + '
    result.textContent = stringSoFar
}

///
multiply.addEventListener('click', addTimes)
function addTimes() {
    stringResult.push(currentEntry)
    stringSoFar += ' * '
    result.textContent = stringSoFar
}

///
subtract.addEventListener('click', addSub)
function addSub() {
    stringResult.push(currentEntry)
    stringSoFar += ' - '
    result.textContent = stringSoFar
}

///
divide.addEventListener('click', addDiv)
function addDiv() {
    stringResult.push(currentEntry)
    stringSoFar += ' / '
    result.textContent = stringSoFar
}

clear.addEventListener('click', () => {
    result.textContent = ""
    stringSoFar = ""
})

back.addEventListener('click', backspace)
function backspace() {
    if(stringSoFar.charAt(stringSoFar.length - 1) === " ") {
        stringSoFar = stringSoFar.slice(0, -3)
    } else stringSoFar = stringSoFar.slice(0, -1)

    result.textContent = stringSoFar
}
//  NUMBAS //


// keyCode listener
window.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key == 0) addZero()
    if (e.key == 1) addOne()
    if (e.key == 2) addTwo()
    if (e.key == 3) addThree()
    if (e.key == 4) addFour()
    if (e.key == 5) addFive()
    if (e.key == 6) addSix()
    if (e.key == 7) addSeven()
    if (e.key == 8) addEight()
    if (e.key == 9) addNine()
    if (e.key == ".") addPoint()
    if (e.key == "+") addPlus()
    if (e.key == "*") addTimes()
    if (e.key == "-") addSub()
    if (e.key == "/") addDiv()
    if (e.key == "Enter") enterButton()
    if (e.key == "Backspace") backspace()
})

/////
zero.addEventListener('click', addZero)
function addZero() {
    result.textContent = result.textContent + '0'
    stringSoFar += 0
}
/////
one.addEventListener('click', addOne)

function addOne() {
    result.textContent = result.textContent + '1'
    stringSoFar += 1
}

/////
two.addEventListener('click', addTwo)

function addTwo() {
    result.textContent = result.textContent + '2'
    stringSoFar += 2
}

/////
three.addEventListener('click', addThree)

function addThree() {
    result.textContent = result.textContent + '3'
    stringSoFar += 3
}

/////
four.addEventListener('click', addFour)

function addFour() {
    result.textContent = result.textContent + '4'
    stringSoFar += 4
}

/////
five.addEventListener('click', addFive)

function addFive() {
    result.textContent = result.textContent + '5'
    stringSoFar += 5
}

/////
six.addEventListener('click', addSix)

function addSix() {
    result.textContent = result.textContent + '6'
    stringSoFar += 6
}

/////
seven.addEventListener('click', addSeven)

function addSeven() {
    result.textContent = result.textContent + '7'
    stringSoFar += 7
}

/////
eight.addEventListener('click', addEight)

function addEight() {
    result.textContent = result.textContent + '8'
    stringSoFar += 8
}

/////
nine.addEventListener('click', addNine)

function addNine() {
    result.textContent = result.textContent + '9'
    stringSoFar += 9
}

/////
point.addEventListener('click', addPoint)

function addPoint() {
    result.textContent = result.textContent + '.'
    stringSoFar += "."
}