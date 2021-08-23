const operate = function (operator) {
    if (operator == 'add') {
        let answer = add()
        return answer
    } else if (operator == 'subtract') {
        let answer = subtract()
        display.textContent = `${answer}`
        return answer
    } else if (operator = 'multiply') {
        let answer = multiply(operand1, operand2)
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
const multiply = (operand1, operand2) => {
    return operand1 * operand2
}
const divide = (operand1, operand2) => {
    return operand1 / operand2
}
const squareroot = (operand1) => { //will only work with 1 operand so I will need to modify the operate function to use this
    return Math.sqrt(operand1)
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
        let currentNumber = [

        ]
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
    /*
       if (typeof operand1 == 'undefined' && typeof operand2 == 'undefined') {
           operand1 = num
           console.log(operand1)
           display.textContent = operand1
           
       } else if (typeof operand1 !== 'undefined' && typeof operand2 == 'undefined' ) {
           operand1 += num.toString()
           display.textContent = operand1
           console.log(operand1)
       }
       if (typeof operator !== 'undefined') {
           
           if (typeof operand2 == 'undefined') {
               operand2 = num
               display.textContent = operand2
               
           } else if (typeof operand2 !== 'undefined') {
               operand2 += num.toString()
               display.textContent = operand2
               
           }
           return numberOperand1 = parseInt(operand1)
       }
    }
    */
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
    let firstNumber = []
    operator = "add"
    firstNumber.push(display.textContent)
    return display.textContent = `${firstNumber} + `

})
let equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', () => {
    operate(operator)  
})
let subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', () => {
    let firstNumber = []
    firstNumber.push(display.textContent)

    display.textContent = `${firstNumber} - `
    return operator = 'subtract'
})


//pressing operand causes its value to be saved as operator and displayed on screen, but the code does not run until there is a second operand
//pressing another number causes its value to be saved as operand2 and displayed on screen
//operate runs when it has all 3 parameters && when equals is pressed