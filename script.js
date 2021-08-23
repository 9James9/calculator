const operate = function (operator) {
    if (operator == 'add') {
        let answer = add()
        return answer
    } else if (operator == 'subtract') {
        let answer = subtract()
        display.textContent = `${answer}`
        return answer
    } else if (operator == 'multiply') {
        let answer = multiply()
        return answer
    } else if (operator == 'divide') {
        let answer = divide()
        return answer
    }
}
const add = () => {
    if (operator == 'add') {
        let finalInput = (display.textContent)
        let newInput = finalInput.split(' + ')
        console.log(newInput)
        let firstNumber = parseInt(newInput[0])
        let secondNumber = parseInt(newInput[1])
        console.log(`firstNumber = ${firstNumber}`)
        console.log(`secondNumber = ${secondNumber}`)
        let answer = firstNumber + secondNumber
        display.textContent = `${answer}`
        return answer
    }
}
const subtract = () => {
    if (operator == 'subtract') {
        let finalInputSubtract = display.textContent
        let newInputSubtract = finalInputSubtract.split(' - ')
        let firstNumberSubtract = parseInt(newInputSubtract[0])
        let secondNumberSubtract = parseInt(newInputSubtract[1])
        console.log(`firstNumberSubtract = ${firstNumberSubtract}`)
        console.log(`secondNumberSubtract = ${secondNumberSubtract}`)
        let answer = firstNumberSubtract - secondNumberSubtract
        display.textContent = `${answer}`
        return answer
    }
}
const multiply = () => {
    if (operator == 'multiply') {
        let finalInputMultiply = display.textContent
        let newInputMultiply = finalInputMultiply.split(' x ')
        let firstNumberMultiply = parseInt(newInputMultiply[0])
        let secondNumberMultiply = parseInt(newInputMultiply[1])
        let answer = firstNumberMultiply * secondNumberMultiply
        display.textContent = `${answer}`
        return answer
    }
}
const divide = () => {
    if (operator == 'divide') {
        let finalInputDivide = display.textContent
        let newInputDivide = finalInputDivide.split(' / ')
        let firstNumberDivide = parseInt(newInputDivide[0])
        let secondNumberDivide = parseInt(newInputDivide[1])
        if (secondNumberDivide == 0) {
            return display.textContent = "You can't divide by 0"
        }
        let answer = firstNumberDivide / secondNumberDivide
        display.textContent = `${answer}`
        return answer
    }
}
const squareroot = (operand1) => { 
    answer = Math.sqrt(operand1)
    display.textContent = `${answer}`
    return
}
//////////////Operate function ^^^^
let display = document.querySelector('#display')

function displayThis(num) {
    let operator
    if (typeof operator == 'undefined') {
        operator = 'off'
    } else {
        operator = 'off'
    }
    if (operator == 'off' || 'undefined') {
        let currentNumber = []
        currentNumber.push(num)
        console.log(`currentNumber = ${currentNumber = currentNumber}`)
        display.textContent += currentNumber
        return
    } else if (operator !== 'off') {
        firstNumber.push(parseInt(display.textContent))
        nextNumber.push(num)
        console.log(nextNumber = `nextNumber = ${nextNumber}`)
        return
    }
    let firstNumber = []
}
//operand buttons
let zeroBtn = document.querySelector('#zero')
zeroBtn.addEventListener('click', () => {
    displayThis(0)
})
let threeBtn = document.querySelector('#three')
threeBtn.addEventListener('click', () => {
    displayThis(3)
})

let twoBtn = document.querySelector('#two')
twoBtn.addEventListener('click', () => {
    displayThis(2)
})

let oneBtn = document.querySelector('#one')
oneBtn.addEventListener('click', () => {
    displayThis(1)
})

let sixBtn = document.querySelector('#six')
sixBtn.addEventListener('click', () => {
    displayThis(6)
})

let fiveBtn = document.querySelector('#five')
fiveBtn.addEventListener('click', () => {
    displayThis(5)
})

let fourBtn = document.querySelector('#four')
fourBtn.addEventListener('click', () => {
    displayThis(4)
})

let nineBtn = document.querySelector('#nine')
nineBtn.addEventListener('click', () => {
    displayThis(9)
})

let eightBtn = document.querySelector('#eight')
eightBtn.addEventListener('click', () => {
    displayThis(8)
})
let sevenBtn = document.querySelector('#seven')
sevenBtn.addEventListener('click', () => {
    displayThis(7)
})
//operator buttons
let clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    operand1 = ''
    operand2 = ''
    operator = ''
    display.textContent = ""
})
let addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () => {
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
    let firstNumber = []
    operator = "add"
    firstNumber.push(display.textContent)
    display.textContent = `${firstNumber} + `
    addBtn.classList.add('selected')
    return
})
let equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', () => {
    addBtn.disabled = false;
    addBtn.classList.remove('selected')
    subtractBtn.disabled = false;
    subtractBtn.classList.remove('selected')
    multiplyBtn.disabled = false;
    multiplyBtn.classList.remove('selected')
    divideBtn.disabled = false;
    divideBtn.classList.remove('selected')
    operate(operator)
})
let subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', () => {
    subtractBtn.disabled = true;
    addBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
    let firstNumber = []
    firstNumber.push(display.textContent)
    display.textContent = `${firstNumber} - `
    subtractBtn.classList.add('selected')
    return operator = 'subtract'
})
let multiplyBtn = document.querySelector('#multiply')
multiplyBtn.addEventListener('click', () => {
    subtractBtn.disabled = true;
    addBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
    let firstNumber = []
    firstNumber.push(display.textContent)
    operator = 'multiply'
    multiplyBtn.classList.add('selected')
    return display.textContent = `${firstNumber} x `
})
let divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', () => {
    subtractBtn.disabled = true;
    addBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
    let firstNumber = []
    firstNumber.push(display.textContent)
    operator = 'divide'
    divideBtn.classList.add('selected')
    return display.textContent = `${firstNumber} / `
})
let squarerootBtn = document.querySelector('#squareroot')
squarerootBtn.addEventListener('click', () => {
    number = display.textContent
    squareroot(number)
})