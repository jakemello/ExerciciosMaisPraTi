const prompt = require('prompt-sync')()

// Exercício 6
// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const ladoA = parseFloat(prompt('Digite o lado A: '))
const ladoB = parseFloat(prompt('Digite o lado B: '))
const ladoC = parseFloat(prompt('Digite o lado C: '))

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
    console.log('Digite apenas números positivos!')
}else if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){

if (ladoA === ladoB && ladoB === ladoC){
    console.log('O tipo de triângulo é: Equilátero')
}else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    console.log('O tipo de triângulo é: Isósceles')
}else {
    console.log('O tipo de triângulo é: Escaleno')
}
}else {
    console.log('Os lados não formam um triângulo. Por favor, tente novamente!')
}