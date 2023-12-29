let num1 = Number(prompt('Insira um número:'))

console.log('Agora, vamos exibir uma curta tabuada desse número e seus dois consequentes')
console.log('..............................')

for(let tabuada = 0; tabuada <= 10; tabuada++){
    console.log(num1 + ' * ' + tabuada + ' = ' + num1 * tabuada)
}

for(let num2 = num1 + 1, tabuada = 0; tabuada <= 10; tabuada++){
    console.log(num2 + ' * ' + tabuada + ' = ' + num2 * tabuada)
}

for(let num3 = num1 + 2, tabuada = 0; tabuada <= 10; tabuada++){
    console.log(num3 + ' * ' + tabuada + ' = ' + num3 * tabuada)
}