// Criando arrays para salvar dados
var nomes = []
var senhas = []
var continuar = true    // variável para continuar ou parar loop

function crud(){
while(continuar){
    let ação = prompt('Cadastro (c) - Login (L) - Deletar (d) - Sair (s)')

    switch(ação){

    case 'c':                   // cadastrando nome e senha inseridos nas respectivas arrays
        nomes.push = prompt('Cadastre seu nome de usuário')
        senhas.push = prompt('Crie uma senha')
        break;

    case 'l':
        login()     // chamando função de login
        break;

    case 'd':
        deletar()       // chamando função de delete
        break;

    case 's':
        console.log('=== Encerrando Programa ===')
        continuar = false       // interrompendo loop
        break;
    }
}
}

function login(){
            
    let insiraNome = prompt('Qual nome de usuário deseja fazer login')
    for(let j = 0; j < nomes.length; j++){
        if(insiraNome == nomes[j]){             // buscando nome inserido na array de nomes
            let insiraSenha = prompt('Digite sua senha')
            if(insiraSenha === senhas[j]){      // se o nome for validado, inserir e buscar senha na array de senhas
                console.log('===== Login Realizado com Sucesso! =====')      // ambos validados, login feito com sucesso
                return true
            } else {
                console.log('Nome ou senha incorretos!')     
                return false
            }
        }                                   // nessa função, se o nome não for encontrado apenas retornará a tela de 'ação'
    }
}

function deletar(){
    let excluirNome = prompt('Insira o nome de usuário que deseja exlcluir')
        for(let index = 0; index < nomes.length; index++){
            if(excluirNome == nomes[index]){        // buscando nome inserido na array de nomes
                let excluirSenha = prompt('Insira a senha da conta -> ' + excluirNome)      // validação com a senha da conta
                if(excluirSenha === senhas[index]){
                nomes.splice(index, 1)      // removendo 
                senhas.splice(index, 1)     //          conta
                continuar = true        // voltando a tela de 'ação'
            }
        }
        }
    }

crud()