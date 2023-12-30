// Variáveis

let sexoMasc = 0
let alunos = 0
let somaDasNotas = 0
let continuar = true
let femAprovado = 0
let maiorNota = Number.MIN_VALUE;

// Cadastrando alunos

while(continuar){
    nota = Number(prompt('Insira sua nota'))
    sexo = prompt('Insira seu sexo (m/f)')
        let cadastrar = prompt('Gostaria de cadastrar mais alguma nota? (s/n)')
            somaDasNotas += nota
            alunos++

        if(sexo === 'm'){
            if(nota > maiorNota){
                maiorNota = nota
            }
                sexoMasc ++
        }   
            else if(sexo === 'f' && nota >7){
            femAprovado++
        }   
            else{
            console.log('Opção de sexo inválida')
        }
    
        if(cadastrar === 's'){  // validar continuação do loop
        continuar = true;
        }   else if(cadastrar !== 's'){
            continuar = false;
        }

}       
    let media = somaDasNotas / alunos

    console.log('\n A média da nota dos alunos é: ' + media.toFixed(2))
    console.log('\n A quantidade de homens cadastrados é de: ' + sexoMasc)
    console.log('\n A quantidade de mulheres que foram aprovadas é de: ' + femAprovado)
    console.log('\n A maior nota entre os homens é: ' + maiorNota)