const prompt = require('prompt-sync')()

//Exercício 9
//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const numero = parseInt(prompt('Digite um número inteiro: '))

if (isNaN(numero)){
    console.log('Por favor, digite um número válido!')
}else {
for (let i = 1; i <= 10; i++){
    console.log(`${i}ª vez: ${numero}`)
    }
}