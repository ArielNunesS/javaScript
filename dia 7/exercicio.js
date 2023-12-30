// Variaveis

let saldoTotal = 10000;
let continuar = true;
let valor = 0;
let pergunta;
let maiorValor = Number.MIN_VALUE;
let quantidadeDeContas = 1;
let soma = 0;

do{
    const nome = prompt('Insira seu nome:')
    const cpf = Number(prompt('Insira seu CPF:'))
    valor = Number(Math.abs(prompt(('Insira o valor que deseja utilizar'))))        // receber os dados
    pergunta = prompt('Gostaria de realizar um saque ou um depósito? (S / D)')    // opção saque ou depósito
    soma += valor

    if(valor <= saldoTotal && pergunta == 's'){
            saldoTotal = saldoTotal - valor;
            console.log('\n O seu saldo atual é de: R$' + saldoTotal)
        }   
            else if(valor >= saldoTotal && pergunta == 's' ){
                console.log('Saldo insuficiente. Operação não pode ser realizada')
                continuar = false;
            }
                else if(pergunta = 'd'){
                saldoTotal += valor;
        }   
            else{console.log('Operação Inválida')
            continuar = false;
    }   
            console.log('\n O seu saldo atual é de: R$' + saldoTotal)

        continuar = prompt('Gostaria de realizar mais alguma transferência? (1 = sim / 2 = não)')   // continuar ou parar o loop
            if(continuar == 1){
                continuar = true
                quantidadeDeContas++;
            }   else if(continuar == 2){
                continuar = false;
            }   else{
                console.log('Opção Inválida')
            }
            if(valor > maiorValor){
                maiorValor = valor
            }

}            while(continuar = true && continuar > 0)


    console.log('\n O maior valor inserido foi: ' + maiorValor)
    console.log('\n A média entre os valores inseridos e a quantidade de contas abertas é: ' + soma / quantidadeDeContas)