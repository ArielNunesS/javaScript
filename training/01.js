// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
// Soma de um array de qualquer tamanho, com quaisquer valores

function aVeryBigSum(ar) {
    let sum = 0;
    
    for(let i = 0; i <= ar.length - 1; i++){
        sum = sum + ar[i];      // iterando o array e guardando a soma de todos elementos em uma variável
    }
    return sum;
}
