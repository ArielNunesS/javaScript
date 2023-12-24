// Criando Variáveis

let nome = ''
let sabor1 = false
let sabor2 = false
let sabor3 = false

// Definindo Variáveis

nome = prompt('Insira seu nome')

let opcaoSabor1 = prompt(nome + ', você gosta de pizza sabor frango? (s/n)')
if (opcaoSabor1 == 's'){
      sabor1 = true
}

let opcaoSabor2 = prompt('E de pizza sabor strogonoff, ' + nome + ', você gosta? (s/n)')
if (opcaoSabor2 == 's'){
      sabor2 = true
}

let opcaoSabor3 = prompt('Por fim, você gosta de pizza de 4 queijos? (s/n)')
if (opcaoSabor3 == 's'){
      sabor3 = true
}

if(sabor1 && sabor2 && sabor3){
      console.log(nome + ', então você vai comer uma fatia de cada sabor')
} else if(sabor1 && sabor2 || sabor1 && sabor3 || sabor2 && sabor3){
      console.log('Então você vai comer duas fatias,' + nome)
} else if (sabor1 || sabor2 || sabor3){
      console.log('Então você vai comer apenas uma fatia')
}

else {
      console.log('Então você não vai comer nenhum sabor, ' + nome)
}