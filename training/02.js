// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
// Calcular quantos números positivos, negativos e iguais a 0 o array possui

function plusMinus(arr) {
    let indice0 = 0;
    let indicePositivo = 0;
    let indiceNegativo = 0;
    let soma = 0;
    
    for(let i = 0; i <= arr.length -1;  i++){
        if(arr[i] === 0){
            indice0++
        }   
            else if(arr[i] > 0){
            indicePositivo++
        }   
            else if(arr[i] < 0){
            indiceNegativo++
        }
        soma++
    }
    console.log(indicePositivo / soma, '\n ', indiceNegativo / soma , '\n ', indice0 / soma );
    
}