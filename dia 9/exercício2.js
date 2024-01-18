let continuar;
let salárioInicial;
    do{

    let nome = prompt('Digite seu nome completo')
    let idade = parseInt(prompt('Insira sua idade'))
    salárioInicial = parseFloat(prompt('Informe seu salário atual'))
    console.log('\n (Nome: ' + nome + '; Idade : ' + idade + '; Salário: R$' + salárioInicial + '.')
    continuar = prompt('Você confima as informações inseridas? (s/n)')

}   while(continuar == 'n')

let salárioFuturo = 0;
let salárioAtual = salárioInicial
let inflação = 0.015;

console.log('\n Previsão salarial para os próximos 10 anos:')

    for(let ano = 1; ano <= 10; ano++){
        salárioAtual += salárioAtual * inflação
        inflação *= 2
        console.log((2023 + ano) + ' - R$' + salárioAtual + '.')
}