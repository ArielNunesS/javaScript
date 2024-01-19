let num1 = parseInt(prompt('Insira um número...'))


let fibonacci = []
fibonacci [0] = num1 - 1                 // definindo elementos 1 e 2 da array
fibonacci [1] = num1

for(let i =2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci [i - 2]
}

    console.log(fibonacci)