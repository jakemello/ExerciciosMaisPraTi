const prompt = require('prompt-sync')()

// Exercício 5
// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const pesoEntrada = prompt('Digite o seu peso (em kg): ')
const alturaEntrada = prompt('Digite a sua altura (em metros): ')

const peso = parseFloat(pesoEntrada)
const altura = parseFloat(alturaEntrada)

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
    console.log('Valores inválidos. Por favor, Digite números positivos.')
}else {
    const imc = peso / (altura * altura)
    console.log(`Seu IMC é: ${imc.toFixed(2)}`) // O .toFixed(n) é um método de número em JavaScript que serve para formatar um número decimal, mantendo exatamente n casas decimais após o ponto.

if (imc < 18.5){
        console.log('Você foi classificado como: Abaixo do peso')
}else if (imc < 25){
    console.log('Você foi classificado como: Peso normal')
}else if (imc < 30){
    console.log('Você foi classificado como: Sobrepeso')
}else {
    console.log('Você foi classificado como: Obesidade')
    }
}