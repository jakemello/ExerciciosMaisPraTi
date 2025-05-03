const prompt = require('prompt-sync')()

///Exercício 2
// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const entrada = prompt('Informe a sua idade: ')
const idade = parseInt(entrada)

if (isNaN(idade) || idade < 0){
    console.log('Idade inválida. Por favor, digite um número inteiro positivo.')
}else{
if (idade <= 12){
    console.log('Você é uma criança.')
}else if (idade <= 17){
    console.log('Você é um adolescente.')
}else if (idade <= 59){
    console.log('Você é um adulto.')
}else {
    console.log('Você é um idoso.')
    }
}
