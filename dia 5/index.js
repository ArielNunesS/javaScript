let num1 = 0
let num2 = 0
let operação;

num1 = parseFloat(prompt('Insira um número'))
operação = prompt('Insira um sinal de operação matemática')
num2 = parseFloat(prompt('Insira outro número'))


switch(operação){
      case '+':
      console.log('A soma entre os números resulta em: ' + (num1 + num2))
             break;
      
      case '-':
            console.log('A subtração entre os números resulta em: ' + (num1 - num2))
                  break;
      
      case '*':
            console.log('A multiplicação entre os números resulta em: ' + (num1 * num2))
                  break;
      
      case '/':
            console.log('A divisão entre os números resulta em: ' + (num1 / num2))
                  break;

      default:
            console.log('Operação Inválida.')
                  break;
      
}