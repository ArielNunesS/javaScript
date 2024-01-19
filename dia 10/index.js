const array = []
const indices = []
let contadorIndice = []

const numProcurado = parseInt(prompt('Escolha um número a ser procurado:'))

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt('Digite o Elemento :'))
    array[i] = elemento;
}

for(let i = 0; i < 10; i++){
    if (array[i] === numProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}
    console.log('O número ' + (numProcurado) + ' foi encontrado nos indices: ' + indices)