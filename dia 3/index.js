let nome = ""
let dataNascimento = 0
let altura = 0
let peso = 0
let idadeAtual = 0

 nome = prompt('Insira seu nome:')
 dataNascimento = parseInt(prompt('Insira o ano em que você nasceu:'))
 altura = Number(prompt('Insira sua altura, em metros:'))
 peso = parseInt(prompt('Qual é seu peso, em kg?'))
 idadeAtual = (2023 - dataNascimento)


 

let imc = (peso / (altura * altura))
console.log('Olá, você se chama ' + nome + ', tem ' + idadeAtual + ' anos, nasceu em ' + dataNascimento + ', tem ' + altura +'m de altura, pesa '
 + peso + 'kg e seu IMC é ' + imc + 'Kg/m²')