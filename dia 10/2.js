let array = []
let arrayInvertido = []

for(let i = 0; i < 5; i++){
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número:'))
    array[i] = numero
}
arrayInvertido = array.reverse()

console.log('\n Array Original: '  +  array)
console.log('\n Agora exibição na ordem contrária: ' + arrayInvertido)