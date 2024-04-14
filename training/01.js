// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

function aVeryBigSum(ar) {
    let sum = 0
    
    for(let i = 0; i <= ar.length - 1; i++){
        sum = sum + ar[i]
    }
    return sum
}
