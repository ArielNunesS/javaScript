var nome
var salario

// Função para definir nome e salário inicial
function cadastro(){
    nome = prompt('Insira seu nome:')
    salario = parseInt(prompt('Informe seu salário, em R$:'))
    calcularAumento(salario)    // chamar a função para calcular o reajuste de salário
}

// Função para calcular o aumento
function calcularAumento(salario){
        var novoSalario
        var inflacao

    switch(true){
        case salario <= 1500:
            novoSalario = (salario * 1.20)
            inflacao = '20%'
            break;
        case salario > 1500 && salario <= 2000:
            novoSalario = (salario * 1.15)
            inflacao = '15%'
            break;
        case salario > 2000 && salario <= 3000:
            novoSalario = (salario * 1.10)
            inflacao = '10%'
            break;
        case salario >= 3001:
            novoSalario = (salario * 1.05)
            inflacao = '5%'
            break;
        }
        console.log(`\n Olá ${nome}`)
        console.log(`O seu salário atual é R$${salario}`)
        console.log(`Seu salário foi reajustado e sofreu um aumento de ${inflacao}`)
        console.log(`Seu próximo salário será de R$${novoSalario}`)
        calcularNovamente()
}

function calcularNovamente(){
    continuar = prompt('Gostaria de calcular novamente, com outras informações? s/n')
    if(continuar == 's'){
        cadastro()
    } else{
        console.log('===== Programa Encerrado =====')
    }
}

cadastro()      // ao chamar essa função, as funções 'calcularAumento' e 'calcularNovamente' também serão chamadas;