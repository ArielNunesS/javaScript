// Criando Arrays
const arrayA = [0, 2, 5, 20, 9, 12, 0, 15, 13, 30]
const arrayB = [2, 3, 20, 12, 3, 17, 25, 30, 82, 11]
var numeroAtual = 0

function numerosEmComum(arrayA, arrayB){
    let arrayNumerosComuns = []
    var indexNumerosComuns = 0

    for(let i = 0; i < arrayA.length; i++){     // verificar todas as posições da arrayA
        numeroAtual = arrayA[i]

        for(let j = 0; j < arrayB.length; j++){     // verificar todas as posições da arrayB
            if(numeroAtual == arrayB[j]){           // busca a similaridade de cada posição do arrayB com todas do arrayA
                arrayNumerosComuns[indexNumerosComuns] = numeroAtual
                indexNumerosComuns++                // salvando números comuns em uma nova array
            }
        }
    }

    console.log('=== Exibindo os números em comum das arrays ===')
    return (arrayNumerosComuns)
}

console.log(numerosEmComum(arrayA, arrayB))