let num1 = prompt('Digite o primeiro número: ')
let num2 = prompt('Digite o segundo número: ')

let sum = Number(num1) + Number(num2)
let sub = Number(num1) - Number(num2)
let mult = Number(num1) * Number(num2)
let div = Number(num1) / Number(num2)
let rest = Number(num1) % Number(num2)


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto dos dois números é: ${rest}`)

if (sum % 2 == 0)
    alert(`O resultado da soma é: par`)
else
    alert(`O resultado da soma é: ímpar`)


if (num1 == num2)
    alert(`Os valores são: iguais`)
else
    alert(`Os valores são: diferentes`)
