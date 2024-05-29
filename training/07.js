// https://leetcode.com/problems/richest-customer-wealth/submissions/1269922860/?source=submission-ac
// Dado um array[i] (clientes) onde recebe um outro array[j] (riqueza do cliente [i] calcular o cliente mais rico)

var maximumWealth = function(accounts) {
    let richClient = 0;
    for(let i = 0; i < accounts.length; i++){
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++){
            sum = sum + accounts[i][j];
        }
        if(richClient <= sum){
            richClient = sum;
        }
    }

    return richClient;
};