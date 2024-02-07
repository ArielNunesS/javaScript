// VARIÁVEIS

let escolha1 = ''
let maisAlgo = ''
let escolha2 = ''
let total = 0
let valor1;
let valor2;

// PRIMEIRA ESCOLHA

escolha1 = (prompt('Escolha uma bebida: 1. água; 2. refrigerante; 3. suco; 4. café; 5. chá;'))

switch(escolha1){
    case '1':
        console.log('Você escolheu água (custo R$3)')
            valor1 = 3
            break;
    
    case '2':
        console.log('Você escolheu refrigerante (custo R$6)')
            valor1 = 6
            break;
    
    case '3':
        console.log('Você escolheu suco (custo R$12)')
            valor1 = 12
            break;
    
    case '4':
        console.log('Você escolheu café (custo R$4)')
            valor1 = 4
            break;

    case '5':
        console.log('Você escolheu chá (custo R$4)')
            valor1 = 4
            break;
    
    default:
        console.log("Opção Inválida.")
        break;
}

maisAlgo = (prompt('Gostaria de mais alguma coisa? s/n'))

if(maisAlgo == 's'){
    escolha2 = (prompt('Escolha mais uma bebida: 1. água; 2. refrigerante; 3. suco; 4. café; 5. chá;'))

switch(
    escolha2){
    case '1':
        console.log('Você escolheu água (custo R$3)')
            valor2 = 3
            total = valor1 + valor2
            console.log("Valor total: R$" + total)
                break;
    
    case '2':
        console.log('Você escolheu refrigerante (custo R$6)')
            valor2 = 6
            total = valor1 + valor2
            console.log("Valor total: R$" + total)
                break;
    
    case '3':
        console.log('Você escolheu suco (custo R$12)')
            valor2 = 12
            total = valor1 + valor2
            console.log("Valor total: R$" + total)
                break;
    
    case '4':
        console.log('Você escolheu café (custo R$4)')
            valor2 = 4
            total = valor1 + valor2
            console.log("Valor total: R$" + total)
                break;

    case '5':
        console.log('Você escolheu chá (custo R$4)')
            valor2 = 4
            total = valor1 + valor2
            console.log("Valor total: R$" + total)
                break;
    
    default:
        console.log("Opção Inválida.")
        break;
}
}

    else if(maisAlgo == 'n'){
        console.log("Valor total: R$" + valor1)
}

    else {
        console.log('Opção Inválida.')
    }