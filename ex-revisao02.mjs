// op se tornou um valor opcional. Caso não seja passado, será considerado o valor '+'
function calcular(x, y, op = '+') {
    if(op == '+') return x + y
    else if(op == '*') return x * y
    else return null
}

console.log(calcular(10, 15, '+'))
console.log(calcular(10, 15, '*'))
console.log(calcular(12, -14, '+'))
console.log(calcular(12, -14, '*'))

console.log(calcular(45, 9))
console.log(calcular(34, 7))
console.log(calcular(-3, -11))
console.log(calcular(84, 67))