const prompt = require('prompt-sync')()

// Exercício 3
// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const entrada = prompt('Digite a sua nota: ')
const nota = parseFloat(entrada) //parseFloat garante que o número que o usuário digitou seja um número que pode conter casas decimais.

if (isNaN(nota) || nota < 0 || nota > 10){
    console.log('Nota inválida. Por favor, digite um valor entre 0 e 10.')
}else {
if (nota >= 7){
    console.log('Parabéns! Você foi Rprovado.🎉')
}else if (nota >= 5){
    console.log('Você está de Recuperação.❗')
}else{
    console.log('Poxa que pena, você está Reprovado!❌')
    }
}