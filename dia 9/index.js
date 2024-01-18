// Criando Variáveis
let nome;
let idade = 0;
let peso;
let altura;
let profissão;
let continuar;

do{

nome = prompt('Digite seu nome:')
idade = parseInt(prompt('Informe sua idade atual:'))
peso = Number(prompt('Informe seu peso, em quilogramas:'))
altura = Number(prompt('Informe sua altura, em metros:'))
profissão = prompt('Informe sua profissão:')


// Usuário inserindo valor as variáveis

console.log('\n Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissão + ', tem ' + altura + 'm de altura e pesa ' + peso + 'kg.')

    let idadeEmDias = parseInt(idade * 365)     // transformar idade em dias
    let idadeEmMeses = parseInt(idade * 12) // transformar idade em meses
    let idadeEmSemanas = parseInt(idade * 52) // transformar idade em semanas

    if(idade > 18){                         // se for maior de idade, pode tomar umas geladas
        console.log(' Está liberado para tomar umas geladas.')
    }   else {
        console.log(' Sem gelada pra você.')
    }
    
    console.log('\n Sua idade atual equivale a: ' + idadeEmMeses + ' meses, ou ' + idadeEmSemanas + ' semanas, ou ' + idadeEmDias + ' dias.')   //informando idade em meses ou semanas ou dias



let imc = peso / (altura * altura);     // calculando IMC ( índice de massa corporal )
let faixa;

    if(imc < 18.5){                            // determinando a faixa em que o usuário se encontra
        faixa = 'Magreza'
    }   else if(imc >= 18.5 && imc < 24.9){
        falxa = 'Normal'
    }   else if(imc >= 24.9 && imc < 30){
        faixa = 'Sobrepeso'
    }   else if(imc >= 30){
        faixa = 'Obesidade'
    }

    console.log('seu IMC é ' + imc + 'kg/m2, e seu peso está na faixa de ' + faixa)



const anoNascimento = 2023 - idade
let anoExibido = anoNascimento
let idadeExibida = 0;

    for(anoNascimento; idadeExibida <= idade; anoExibido++, idadeExibida++){
        console.log(anoExibido + ' - ' + idadeExibida + ' anos de idade')
}

    continuar = prompt('Deseja inserir novos dados? ( s/n )') 
}   while (continuar == 's')