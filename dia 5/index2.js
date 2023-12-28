// CRIANDO E DEFININDO VARIÁVEIS

let gasolina = 0
let álcool = 0
let calibrar
let serviço


serviço = prompt('Qual serviço você gostaria de fazer? (gasolina/álcool/calibrar os pneus')

// INTERPRETANDO O SERVIÇO ESCOLHIDO E EXIBINDO O VALOR

switch(serviço){
    case 'gasolina':
        gasolina = parseFloat(prompt('Você deseja abastercer quantos litros? Valor: 5R$/L'))
            console.log('O serviço saiu R$' + (gasolina * 5))
                break;

    case 'álcool':
        álcool = parseFloat(prompt('Você deseja abaster quantos litos? Valor: 3R$/L'))
            console.log('O serviço saiu R$ ' + (álcool * 3))
             break;

    case 'calibrar os pneus':
        console.log('Pneus calibrados com sucesso!')
            break;
    
    case 'gasolina e calibrar os pneus':
        gasolina = parseFloat(prompt('Você deseja abastercer quantos litros? Valor: 5R$/L'))
         console.log('Os pneus foram calibrados com sucesso e o serviço saiu R$ ' + (gasolina * 5))
            break;

    case 'álcool e calibrar os pneus':
        álcool = parseFloat(prompt('Você deseja abastercer quantos litros? Valor: 3R$/L'))
         console.log('Os pneus foram calibrados com sucesso e o serviço saiu R$ ' + (álcool * 3))
            break;

    default:
        console.log('Este serviço não existe.')
            break;
}