// Dado os arrays "array1" e "array2", encontrar números em comum entre os arrays

// Criando Arrays
const array1 = [0, 4, 17, 30, 24, 11, 15, 11, 8, 24];
const array2 = [3, 11, 9, 16, 24, 25, 0, 32, 25, 24];
var novoArray = [];
var numeroAtual;

function numerosEmComum(){

    for(let i = 0; i < array1.length; i++){
        numeroAtual = array1[i]                     // iterando o "array1" e salvando o elemento da vez em uma variável "numeroAtual"         
            
        for(let j = 0; j < array2.length; j++){
            if(numeroAtual === array2[j] && (!novoArray.includes(numeroAtual))){        // iterando o "array2" e verificando a similaridade com a variável numeroAtual
                novoArray.push(numeroAtual);
            }
        }
    }
        return (novoArray);
}

console.log(numerosEmComum(array1, array2))     // verificando funcionamento do código