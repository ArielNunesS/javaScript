// Criando Variáveis

let nome = ''
let idade = 0
let carteira = false
let carro = false
deMaior = 18

// Pedindo info. ao usuário

nome = prompt('Insira seu nome')
idade = parseInt(prompt('Você tem quantos anos?'))
let opcaoCarta = prompt('Você possui carteira de motorista? (s/n)')
if (opcaoCarta == 's') {
      carteira = true
}

let opcaoCarro = prompt('Você tem algum carro? (s/n)')
if (opcaoCarro == 's') {
      carro = true
}

// Exibindo mensagens no console    

if (idade < deMaior || !carteira ){
      console.log(nome + ', você não pode dirigir')
} else if (idade >= deMaior && carteira && !carro ){
            console.log(nome + ', você pode dirigir mas não tem um carro')
} else {
      console.log(nome + ', você será o motorista!')
      }