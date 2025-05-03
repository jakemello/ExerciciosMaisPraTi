const prompt = require('prompt-sync')()

//Exercício 12
// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const numero = parseFloat(prompt('Digite um número para ver a tabuada: '))

if (isNaN(numero)){
    console.log('Por favor, digite um número válido!')
}else {
    console.log(`Tabuada do ${numero}:`)

for (let i = 1; i <= 10; i++){
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)
    }
}