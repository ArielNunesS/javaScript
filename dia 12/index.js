    //  Criando variáveis e arrays

let nomes = []
let senhas = []
let continuar = true
let i = 0

    //  Criando Loop

do{
let ação = prompt('Qual ação gostaria de realizar? \n Cadastrar (c) - Login (L) - Deletar (d) - Encerrar (e)')

if(ação == 'c'){
        let nome = prompt('Insira seu nome de usuário:')
        let senha = prompt('Crie uma senha para seu cadastro:') 
    let condição = true
        for(i; condição; i++){          // Armazenando dados nas arrays *nomes* e *senhas*
        nomes[i] = nome
        senhas[i] = senha
        condição = false
    }}

    // Criando opção para fazer login

if(ação == 'l'){
    let buscarNome = ''
    let buscarSenha = ''
    let j = 0
    let tentarNovamente = true

    while(tentarNovamente){
    j = 0
    buscarNome = prompt('Digite seu nome de usuário:')

        for(j; j < nomes.length; j++){      // verificar todas as posições da array até encontrar a semelhança
            if(buscarNome === nomes[j]){
            tentarNovamente = false
            buscarSenha = prompt('Insira sua senha:')
                if(buscarSenha === senhas[j]){          // o valor da senha precisa ser igual a senha do mesmo índice do respectivo nome
                    console.log('\n Login Realizado com Sucesso')
                }   else{
                    console.log('\n Senha inválida, tente Novamente')
                    continuar = true
                }
            }
        }
    }
}

    // Criando função para deletar dados

if(ação == 'd'){
    let deletarNome = ''
    let validarExclusão = false
    let ij = 0

    while(validarExclusão === false){
    ij = 0
    deletarNome = prompt('Insira seu nome de usuário:')

        for(ij; ij < nomes.length; ij++){
        if(deletarNome === nomes[ij]){      // splice é utilizado para remover aquele elemento e aquele índice da array
            nomes.splice(ij, 1)
            senhas.splice(ij, 1)
            validarExclusão = true
        }   else {
                console.log('Nome de usuário não encontrado')
                continuar = true
            }       
        }
    }
}

    //  Opção para acabar com o Loop
if(ação == 'e'){
    continuar = false
}

}   while(continuar === true)
    console.log(nomes, senhas)