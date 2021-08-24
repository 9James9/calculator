let firstNumber = ''
let secondNumber = ''
let operator = ''
let newInput = ''
let numberStorage = {
    firstNum: "",
    secondNum: "",
    displayed: "",
    currentAnswer: "",
}
//operand buttons
const zeroBtn = document.querySelector('#zero')
zeroBtn.addEventListener('click', () => {
    displayInput(0)
})
const threeBtn = document.querySelector('#three')
threeBtn.addEventListener('click', () => {
    displayInput(3)
})
const twoBtn = document.querySelector('#two')
twoBtn.addEventListener('click', () => {
    displayInput(2)
})
const oneBtn = document.querySelector('#one')
oneBtn.addEventListener('click', () => {
    displayInput(1)
})
const sixBtn = document.querySelector('#six')
sixBtn.addEventListener('click', () => {
    displayInput(6)
})
const fiveBtn = document.querySelector('#five')
fiveBtn.addEventListener('click', () => {
    displayInput(5)
})
const fourBtn = document.querySelector('#four')
fourBtn.addEventListener('click', () => {
    displayInput(4)
})
const nineBtn = document.querySelector('#nine')
nineBtn.addEventListener('click', () => {
    displayInput(9)
})
const eightBtn = document.querySelector('#eight')
eightBtn.addEventListener('click', () => {
    displayInput(8)
})
const sevenBtn = document.querySelector('#seven')
sevenBtn.addEventListener('click', () => {
    displayInput(7)
})
const decimalBtn = document.querySelector('#decimal')
decimalBtn.addEventListener('click', () => {
    
    
    displayInput(".")
    
})
function displayInput(num) {
    let currentDisplay = document.querySelector('#display')
    currentDisplay.textContent += num
    numberStorage.displayed += num
    if (numberStorage.displayed.indexOf('.') !== -1) {
        decimalBtn.setAttribute('disabled','')
    } else {
        decimalBtn.removeAttribute('disabled')
    }
}
function checkToClear() {
    if (firstNumber !== '' && secondNumber !== '') {
        clear()
        clearHistory()
    } else return
}
//operator buttons
let currentDisplay = document.querySelector('#display')
let history = document.querySelector('#history')
let addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () => {
    //let currentDisplay = document.querySelector('#display')
    operator = '+'
    //firstNumber = currentDisplay.textContent
    if (numberStorage.firstNum == '') {
        numberStorage.firstNum = numberStorage.displayed
        numberStorage.displayed = ""
    }
    firstNumber = numberStorage.firstNum
    history.textContent = `${numberStorage.firstNum} ${operator} `
    addBtn.classList.add('selected')
    clear()
    return
})
let subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', () => {
    operator = '-'
    //firstNumber = currentDisplay.textContent
    if (numberStorage.firstNum == '') {
        numberStorage.firstNum = numberStorage.displayed
        numberStorage.displayed = ""
    }
    firstNumber = numberStorage.firstNum
    history.textContent = `${numberStorage.firstNum} ${operator} `
    subtractBtn.classList.add('selected')
    clear()
    return
})
let multiplyBtn = document.querySelector('#multiply')
multiplyBtn.addEventListener('click', () => {
    operator = '*'
    //firstNumber = currentDisplay.textContent
    if (numberStorage.firstNum == '') {
        numberStorage.firstNum = numberStorage.displayed
        numberStorage.displayed = ""
    }
    firstNumber = numberStorage.firstNum
    history.textContent = `${firstNumber} x `
    multiplyBtn.classList.add('selected')
    clear()
    return
})
let divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', () => {
    operator = "/"
    //firstNumber = currentDisplay.textContent
    if (numberStorage.firstNum == '') {
        numberStorage.firstNum = numberStorage.displayed
        numberStorage.displayed = ""
    }
    firstNumber = numberStorage.firstNum
    history.textContent = `${numberStorage.firstNum} / `
    divideBtn.classList.add('selected')
    clear()
    return
})
let sqrtBtn = document.querySelector('#squareroot')
sqrtBtn.addEventListener('click', squareRoot)

function squareRoot() {
    num = numberStorage.currentAnswer
    answer = Math.sqrt(num).toFixed(3)
    commaAnswer = answer.toLocaleString("en-US")
    numberStorage.currentAnswer = parseFloat(answer)
    numberStorage.firstNum = numberStorage.currentAnswer
    return currentDisplay.textContent = `${commaAnswer}`
}
let clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    clear()
    removeClass()
    clearHistory()
    numberStorage = {
        firstNum: "",
        secondNum: "",
        displayed: "",
        currentAnswer: "",
    }
})
let equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', () => {
    //secondNumber = currentDisplay.textContent
    secondNumber = numberStorage.displayed
    numberStorage.displayed = ""
    history.textContent += `${secondNumber}`
    //clear()
    operate()
    removeClass()
    return //history.textContent += `${firstNumber} ${operator} ${secondNumber}`
})

function operate() {
    let a = parseFloat(numberStorage.firstNum)
    let b = parseFloat(secondNumber)
    let commaAnswer
    switch (operator) {
        case operator = "+":
            answer = a + b
            commaAnswer = answer.toLocaleString("en-US")
            numberStorage.currentAnswer = parseFloat(answer)
            currentDisplay.textContent = `${commaAnswer}`
            history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
            break;
        case operator = "-":
            answer = a - b
            commaAnswer = answer.toLocaleString("en-US")
            numberStorage.currentAnswer = parseFloat(answer)
            currentDisplay.textContent = `${commaAnswer}`
            history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
            break;
        case operator = "*":
            answer = a * b
            commaAnswer = answer.toLocaleString("en-US")
            numberStorage.currentAnswer = parseFloat(answer)
            currentDisplay.textContent = `${commaAnswer}`
            history.textContent = `${firstNumber} x ${secondNumber} = ${answer}`
            break;
        case operator = "/":
            answer = a / b
            commaAnswer = answer.toLocaleString("en-US")
            numberStorage.currentAnswer = parseFloat(answer)
            currentDisplay.textContent = `${commaAnswer}`
            history.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
            break;
        default:
            break;
    }
    numberStorage.firstNum = (numberStorage.currentAnswer).toString()
    clearHistory()
}
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