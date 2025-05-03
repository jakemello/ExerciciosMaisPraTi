let soma = 0
let contador = 0

while (true){
    const numero = parseFloat(prompt('Digite um ou mais números decimais, e depois (digite 0 para encerrar o programa e saber a média dos números digitados): '))

if (isNaN(numero)){
    console.log('Valor inválido. Digite um número.')
    continue
    }

if (numero === 0) {
    break
    }

    soma += numero
    contador++
}

if (contador === 0) {
    console.log('Nenhum número foi digitado.')
}else {
    const media = soma / contador
    console.log(`A média dos ${contador} números digitados é: ${media.toFixed(2)}`)
}