// https://leetcode.com/problems/filter-elements-from-array/submissions/1283864158/?envType=study-plan-v2&envId=30-days-of-javascript
// Filtrar elementos de um array

var filter = function(arr, fn) {
    let filteredArr = [];
    for(let i = 0; i <arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};