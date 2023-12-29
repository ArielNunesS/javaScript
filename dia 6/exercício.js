// Variáveis

let numeroInicial = prompt('Insira um número inicial')
let numeroFinal = prompt('Insira um número final (maior que o inicial)') 


console.log('Vamos verificar se cada número entre esse intervalo é Ímpar ou é Par')

// Verificando o Intervalo e exibindo a info.

for(let intervalo = 0; intervalo >= numeroInicial, intervalo <= numeroFinal; intervalo++){
    if(intervalo % 2 === 0){
        console.log(intervalo + " = Par")
    } else{
        console.log(intervalo + " = Ímpar")
    }

}

// solicitar um número inicial e um final;
// verificar todos os números no intervalo (incluindo o inicial e o final)
   // e exibir na tela se CADA NÚMERO é ÍMPAR OU PAR