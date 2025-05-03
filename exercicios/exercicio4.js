const prompt = require('prompt-sync')()

// Exercício 4
// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log('Bem-vindo ao Menu:')
console.log('Digite 1 para: Dizer Olá')
console.log('Digite 2 para: Mostrar data atual')
console.log('Digite 3 para: Sair')

const entrada = prompt('Por favor, escolha uma opção entre (1, 2, ou 3): ')
const opcao = parseInt(entrada)

if (isNaN(opcao)){
    console.log('Opção inválida! Por favor, digite um número entre 1, 2 ou 3.')
}else {
    switch(opcao){
        case 1:
            console.log('Olá! Seja muito Bem-vindo!!😁')
            break
        case 2:
            const hoje = new Date() // new Date() cria uma nova data com o valor atual (dia, mês e ano do momento que o programa está rodando).
            console.log(`A data atual é: ${hoje.toLocaleDateString()}`) //.toLocaleDateString() é um método (ou seja, uma função que pertence ao objeto Date) que serve para formatar a data de forma legível, respeitando o formato da região (localidade) do usuário.(exemplo: no Brasil, fica tipo 30/04/2025).  
            break
        case 3:
            console.log('Saindo do programa...')
            break
            
        default:
            console.log('Opção inválida! Escolha entre 1, 2 ou 3.')    
    }
}