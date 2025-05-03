const prompt = require('prompt-sync')()

//Exercício 1
//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const entrada = prompt('Digite um número inteiro: ')
const numero = parseInt(entrada) //parseInt garante que o número que o usuário digitou seja um núamero inteiro.

//isNaN(valor) retorna true se o valor não for um número.
if (isNaN(numero)){
    console.log('O Valor digitado é inválido. Por favor, digite um número inteiro.')
}else{
if (numero % 2 === 0){
    console.log('O número é par.')
}else {
    console.log('O número é ímpar.')
    }
}

