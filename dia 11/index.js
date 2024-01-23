//  Criando Variáveis
let arrayNome = []
let arrayNota = []
let exibirNota = []
let nota = 0
let continuar = true
let pergunta = ''
let i = 0
let soma = 0
let numDoAluno = 0


//  Criando Loop
do{
    for(i; continuar; i++){
        let nome = prompt('Insira o nome do aluno:')
        nota = Number(prompt('Insira a nota do aluno:'))

        arrayNome [i] = nome
        arrayNota [i] = nota
        soma += nota

        pergunta = prompt('Gostaria de insira mais uma nota? (s/n)')
            if(pergunta !== 's'){
                continuar = false;
            }
    }

}   while(continuar === true)


//  Exibindo Informações
for(numDoAluno ; numDoAluno < i; numDoAluno++){
console.log('O aluno nº ' + (numDoAluno + 1) + ' possui nota ' + arrayNota[numDoAluno])
}

console.log('Somando a nota de todos os alunos obtemos o valor ' + soma)
console.log('A média geral da turma é: ' + soma / (numDoAluno))