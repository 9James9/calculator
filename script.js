const operate = function(operand1,operator,operand2) {
if (operator = 'add') {
    let answer = add(operand1,operand2)
    return answer
} else if (operator = 'subtract') {
    let answer = subtract(operand1,operand2)
    return answer
} else if (operator = 'multiply') {
    let answer = multiply(operand1,operand2)
    return answer
}
}
const add = (operand1,operand2) => {
    return operand1 + operand2
}
const subtract = (operand1,operand2) => {
    return operand1 - operand2
}
const multiply = (operand1,operand2) => {
    return operand1 * operand2
}
const divide = (operand1,operand2) => {
    return operand1 / operand2
}
const squareroot = (operand1) => { //will only work with 1 operand so I will need to modify the operate function to use this
    return Math.sqrt(operand1)
}
//////////////Operate function ^^^^

//pressing a number causes its value to be saved as operand1 and displayed on screen
//let operand1 = 0

let display = document.querySelector('#display')
display.textContent = 0

//if operand1 is already defined, then next button will define operand2
function displayThis (num) {
    if (typeof operand1 == 'undefined') {
        operand1 = num
        console.log(`operand1: ${operand1}`)
        return display.textContent = operand1
    } else if (typeof operand1 !== 'undefined') {
        operand2 = num
        console.log(`operand2: ${operand2}`)
        return display.textContent = operand2
    } //else if operand1 and operand2 !== undefined, run operate() and reset operand1 and 2's values after displaying results
}



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
  //pressing operand causes its value to be saved as operator and displayed on screen, but the code does not run until there is a second operand
  //pressing another number causes its value to be saved as operand2 and displayed on screen
    //operate runs when it has all 3 parameters && when equals is pressed

