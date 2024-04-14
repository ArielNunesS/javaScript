// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a, b) {
    let pontosAlice = 0
    let pontosBob = 0
    let pontosDeAmbos = []

        for(let i = 0; i < 3; i++){
            if(a[i] > b[i]){
                pontosAlice++
            }
            
            if(a[i] < b[i]){
                pontosBob++
            }
        }
            pontosDeAmbos[0] = pontosAlice
            pontosDeAmbos[1] = pontosBob
            
            return pontosDeAmbos
}