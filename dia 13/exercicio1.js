class Computador{
    tipo
    processador
    placaDeVideo
    armazenamento
    RAM
    SSD
    constructor(tipo, processador, placaDeVideo, armazenamento, RAM){
        this.tipo = tipo
        this.processador = processador
        this.placaDeVideo = placaDeVideo
        this.armazenamento = armazenamento
        this.RAM = RAM
    }
}

tipo = prompt('Insira o tipo do seu computador (notebook ou desktop)')
processador = prompt('Informe o modelo de seu processador')
placaDeVideo = prompt('Informe o modelo de sua placa de vídeo')
armazenamento = prompt('Digite a capacidade de armazenamento de seu ' + tipo)
RAM = prompt('Informe a capacidade de memória RAM de seu ' + tipo)

let computador = new Computador(tipo, processador, placaDeVideo, armazenamento, RAM)

let possuiSSD = prompt('Você possui SSD? (sim/não)')
computador.SSD = possuiSSD
console.log(computador)