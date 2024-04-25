// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
// Rastrear quantas vezes uma pontuação estabelece um novo recorde, tanto para o maior recorde quanto para o menor

function breakingRecords(scores) {
    let numAtual;
    let numInicial = scores[0];
    let maiorRecorde = numInicial;
    let menorRecorde = numInicial;
    let int = [0, 0];
    

    for(let i = 1; i < scores.length; i++){
        numAtual = scores[i]
    
        if(numAtual > maiorRecorde){
            maiorRecorde = numAtual
            int[0]++
        }
        if(numAtual < menorRecorde){
            menorRecorde = numAtual
            int[1]++
        }
        }

    return int
}