// Criando a Classe Carro
class Carro{
    Nome
    Potencia
    VelocidadeMax
    Aceleracao
    CemMetros
    constructor(nome, potencia, velocidadeMax, aceleracao, cemMetros){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMax = velocidadeMax
        this.Aceleracao = aceleracao
        this.CemMetros = cemMetros
    }
}

// Criando loop para criar vários objetos
let continuar = true
let carros = []
let i = 0
while(continuar){

    console.log('========== Crie um Carro ==========')
    nome = prompt('Insira a marca do carro')
    potencia = parseInt(prompt('Informe a potência em cavalos de seu carro'))
    velocidadeMax = parseInt(prompt('Informe a velocidade máxima possível, em km/h'))
    aceleracao = parseFloat(prompt('Informe a aceleração do carro, em m/s²'))

// Definindo aceleração e veocidade do carro
        carros [i] = new Carro(nome, potencia, velocidadeMax, aceleracao)
        cemMetros = 100 / (velocidadeMax / aceleracao)
        carros[i].CemMetros = cemMetros
    i++

    let pergunta = prompt('\n Gostaria de criar mais um carro? (s/n)')
    if(pergunta == 'n'){
    continuar = false
    }
}

// Criando Classe corrida
class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(nomeCorrida, tipo, distancia, participantes, vencedor){
        this.Nome = nomeCorrida
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = participantes
        this.Vencedor = vencedor
    }
}
    console.log('\n ========== Agora vamos montar uma Corrida ==========')
    nomeCorrida = prompt('Dê um nome a sua corrida')
    tipo = prompt('Qual é a modalidade da corrida? (ex F1, Rally, etc)')
    distancia = parseFloat(prompt('Determine a distância total do percurso, em metros'))
    let corrida = new Corrida(nomeCorrida, tipo, distancia)

// Definindo Participantes
    participantes = []
    for(let indexParticipante = 0; indexParticipante < carros.length; indexParticipante++){
        participantes[indexParticipante] = carros[indexParticipante].Nome
        corrida.Participantes = participantes
    }
    console.log(participantes)

// Verificando e exibindo o vencedor da corrida
    let menorValor = carros[0]
    for(let j = 0; j < carros.length; j++){
        if(carros[j].CemMetros < menorValor.CemMetros){
        menorValor = carros[j]
    }
}

// Exibindo informações da corrida (participantes, vencedor)
corrida.Vencedor = menorValor
console.log('===== O vencedor da corrida foi o participante ' + menorValor.Nome + ' =====')