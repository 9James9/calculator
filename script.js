let firstNumber = ''
let secondNumber = ''
let operator = ''
let newInput = ''
//operand buttons
let zeroBtn = document.querySelector('#zero')
zeroBtn.addEventListener('click', () => {
    displayInput(0)
})
let threeBtn = document.querySelector('#three')
threeBtn.addEventListener('click', () => {
    displayInput(3)
})
let twoBtn = document.querySelector('#two')
twoBtn.addEventListener('click', () => {
    displayInput(2)
})
let oneBtn = document.querySelector('#one')
oneBtn.addEventListener('click', () => {
    displayInput(1)
})
let sixBtn = document.querySelector('#six')
sixBtn.addEventListener('click', () => {
    displayInput(6)
})
let fiveBtn = document.querySelector('#five')
fiveBtn.addEventListener('click', () => {
    displayInput(5)
})
let fourBtn = document.querySelector('#four')
fourBtn.addEventListener('click', () => {
    displayInput(4)
})
let nineBtn = document.querySelector('#nine')
nineBtn.addEventListener('click', () => {
    displayInput(9)
})
let eightBtn = document.querySelector('#eight')
eightBtn.addEventListener('click', () => {
    displayInput(8)
})
let sevenBtn = document.querySelector('#seven')
sevenBtn.addEventListener('click', () => {
    displayInput(7)
})
function displayInput (num) {
let currentDisplay = document.querySelector('#display')
currentDisplay.textContent += num
}
function checkToClear() {
    if (firstNumber !== '' && secondNumber !== '') {
        clear()
        clearHistory()
    }else return
} 
//operator buttons
let currentDisplay = document.querySelector('#display')
let history = document.querySelector('#history')
let addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () => {
    //let currentDisplay = document.querySelector('#display')
    checkForDouble(addBtn)
    operator = '+'
    firstNumber = currentDisplay.textContent
    history.textContent += `${firstNumber} ${operator} `
    addBtn.classList.add('selected')
    clear()
    return 
})
let subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', () => {
    checkForDouble(subtractBtn)
    operator = '-'
    firstNumber = currentDisplay.textContent
    history.textContent += `${firstNumber} ${operator} `
    subtractBtn.classList.add('selected')
    clear()
    return
})
let multiplyBtn = document.querySelector('#multiply')
multiplyBtn.addEventListener('click', () => {
    checkForDouble(multiplyBtn)
    operator = '*'
    firstNumber = currentDisplay.textContent
    history.textContent += `${firstNumber} x `
    multiplyBtn.classList.add('selected')
    clear()
    return
})
let divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', () => {
    checkForDouble(divideBtn)
    operator = "/"
    firstNumber = currentDisplay.textContent
    history.textContent += `${firstNumber} / `
    divideBtn.classList.add('selected')
    clear()
    return
})
let sqrtBtn = document.querySelector('#squareroot')
sqrtBtn.addEventListener('click',squareRoot)
function squareRoot () {
    num = currentDisplay.textContent
     answer = Math.sqrt(num).toFixed(2)
     return currentDisplay.textContent = `${answer}`
    }
let clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    clear()
    removeClass()
    clearHistory()
})
let equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', () => { 
    secondNumber = currentDisplay.textContent
    history.textContent += `${secondNumber}`
    //clear()
    operate()
    removeClass()
    return //history.textContent += `${firstNumber} ${operator} ${secondNumber}`
})
function operate() {
    let a = parseInt(firstNumber)
    let b = parseInt(secondNumber)
    switch (operator) {
        case operator = "+":
             answer = a + b
             currentDisplay.textContent = `${answer}`
             history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`         
            break;
        case operator = "-":
            answer = a - b
            currentDisplay.textContent = `${answer}`
            history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
            break;
        case operator = "*":
            answer = a * b
            currentDisplay.textContent = `${answer}`
            history.textContent = `${firstNumber} x ${secondNumber} = ${answer}`
            break;
        case operator = "/":
            answer = a / b
            currentDisplay.textContent = `${answer}`
            history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
            break;
        default:
            break;
    }
    clearHistory()
}
//utility functions
function clear() {
    return currentDisplay.textContent = ""
}
function clearHistory() {
    return history.textContent = ""
}
function removeClass() {
    addBtn.classList.remove('selected')
    subtractBtn.classList.remove('selected')
    multiplyBtn.classList.remove('selected')
    divideBtn.classList.remove('selected')
}
function checkForDouble (btn) { //if a button has already been clicked this will prevent another operator being added. This somehow works but gives an error
    if (btn.classList == 'selected') {
         history.textContent.remove(operator)
    } else if (subtractBtn.classList == 'selected') {
        history.textContent.remove(operator)
    }else if (addBtn.classList == 'selected') {
        history.textContent.remove(operator)
    } else if (multiplyBtn.classList == 'selected') {
        history.textContent.remove(operator)
    } else if (divideBtn.classList == 'selected') {
        history.textContent.remove(operator)
    }
}
