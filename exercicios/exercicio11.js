const prompt = require('prompt-sync')()

//Exercício 11
//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

let soma = 0

for (let i = 1; i <= 5; i++){
const numero = parseFloat(prompt(`Digite o ${i}º número: `))

if (isNaN(numero)){
    console.log('Você digitou um valor inválido. Por favor, digite um número válido.')
    i--
}else {
    soma += numero
    }
}

console.log(`A soma total dos 5 números é: ${soma}`)