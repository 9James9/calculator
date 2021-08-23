const operate = function(currentNumber,operator,operand2) {
if (operator = 'add') {
    let answer = add(currentNumber,operand2)
    return answer
} else if (operator = 'subtract') {
    let answer = subtract(operand1,operand2)
    return answer
} else if (operator = 'multiply') {
    let answer = multiply(operand1,operand2)
    return answer
}
}
const add = (currentNumber,nextNumber) => {
    

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
//display.textContent = 0

//if operand1 is already defined, then next button will define operand2 ****I can change this one I add the operators because I can use an operator event listener to switch when to start recording value from operand1 to operand2. Pressing an operator will store operand 1's value and then begin recording the value for operand2
/*
function displayThis (num) { 
    if (typeof operand1 == 'undefined' || operand1 == '') {
        operand1 = num
        console.log(`operand1: ${operand1}`)
        return display.textContent = operand1
    } else if (typeof operand1 !== 'undefined' || operand1 !== '' ||operand1 == 0) {
        operand2 = num
        console.log(`operand2: ${operand2}`)
        return display.textContent = operand2
    } //else if operand1 and operand2 !== undefined, run operate() and reset operand1 and 2's values after displaying results
}
*/
function displayThis (num) {
    let nextNumber = []
    let operator
    if (typeof operator == 'undefined') {
        let operator = 'off'
    } else {let operator = 'off'}
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
    operate(operator = 'add')
    //display.textContent = `answer!`
    return
})
/*
let equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', () => {
    
    if (typeof currentNumber == 'undefined' || typeof operand2 == 'undefined' || typeof operator == 'undefined') {display.textContent = "Error!"
    } else if (typeof operand1 !== 'undefined' && typeof operand2 !== 'undefined' || typeof operator !== 'undefined') {
        
        //let numberOperand1 = parseInt(operand1)
        let numberOperand2 = parseInt(operand2)
        let numberOperand1 = parseInt(operand1)
        console.log(typeof operand1)
        console.log(typeof operand2)
        console.log(typeof numberOperand1)
        console.log(typeof numberOperand2)
        display.textContent = operate(currentNumber,operator,numberOperand2)
        
        operand1 = ''
        operand2 = ''
        return 
        
    }
})

*/


  //pressing operand causes its value to be saved as operator and displayed on screen, but the code does not run until there is a second operand
  //pressing another number causes its value to be saved as operand2 and displayed on screen
    //operate runs when it has all 3 parameters && when equals is pressed

