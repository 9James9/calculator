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
