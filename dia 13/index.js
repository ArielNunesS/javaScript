class Aluno{
    nome
    idade
    nota
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

console.log('\n ======= Cadastro de Alunos =======')

let continuar = true
let inserirNota
let alunos = []
let indexDeAluno = 0
let nota = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno')
    let idade = parseInt(prompt('Insira a idade do aluno'))
    let aluno = new Aluno(nome, idade)

        inserirNota = prompt('O aluno já fez alguma prova? s/n')
            if(inserirNota == 's'){
                nota = parseInt(prompt('Insira a nota do aluno'))
            }
            aluno.nota = nota;

    alunos[indexDeAluno] = aluno
    let novoCadastro = prompt('Gostaria de realizar mais um cadastro? s/n')
        if(novoCadastro == 'n'){
            continuar = false
            continue
        }
    
    indexDeAluno++
}