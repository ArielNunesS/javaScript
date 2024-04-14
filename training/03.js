// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
    // Write your code here
    let min = 0
    let max = 0
    arr.sort()
    
    for(let i = 0; i < arr.length - 1; i++){
        min += arr[i]
    }
    
    arr.reverse()
    
    for(let j = 0; j < arr.length - 1; j++){
        max += arr[j]
    }
    
    console.log(min + ' ' + max)
}