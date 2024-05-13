// CRUD Simples

class Usuário {
    Nome
    Email
    Senha
    Telefone // opcional
    constructor(nome, email, senha){
        this.Nome = nome;
        this.Email = email;
        this.Senha = senha;
    }
}

const arrUsuarios = [];
let continuar = true;

window.alert("Sistema de Cadastro e Login")

do{

    let acao = prompt("Escolha uma opção \n Cadastro (c)   Login (L)   Redefinir Senha (r)   Deletar (d)   Sair (s)")
    
    switch(acao){

    case "c":
        let nome = prompt("Vamos iniciar o cadastro \n Insira seu nome: ")
        let email = prompt("Insira seu endereço de email   Ex: seunome@gmail.com")
        let senha = prompt("Digite uma senha")
        let confirmacao = prompt("Confirme a senha inserida")
            if(confirmacao != senha){
                alert("A senha inserida está incorreta; \n Voltando ao início")
                continuar;
            }   else {
                    arrUsuarios.push(new Usuário(nome, email, senha));
            }
            
            break;

    case "l":
        let buscarNome = prompt("===== Login ===== \n Insira o seu nome de usuário")
        let verifNome= arrUsuarios.find((usuário) => usuário.Nome === buscarNome)
            if(verifNome){
                let buscarSenha = prompt(`Insira sua senha, ${buscarNome}`)
                if(buscarSenha == verifNome.Senha){
                    alert("Seu login foi bem sucedido")
                        break;
                 }  else {
                        alert("Senha incorreta")
                        break;
                }
            }   else {
                alert("Nome de usuário não encontrado")
                break;
            }

    case "r":
            let buscarNome1 = prompt("Digite seu nome de usuário")
            let verifNome1= arrUsuarios.find((usuário) => usuário.Nome === buscarNome1)
            if(verifNome1){
                let buscarSenha1 = prompt(`Insira sua senha, ${buscarNome1}`)
                    if(buscarSenha1 == verifNome1.Senha){
                        if(buscarSenha1 == verifNome1.Senha){
                            let novaSenha = prompt("Digite a sua nova senha")
                            verifNome1.Senha = novaSenha
                        }
                            break;
                    }   else {
                        alert("Senha incorreta")
                        break;
                    }
            }   else {
                alert("Nome inserido não encontrado")
                break;
            }

            case "d":
                let buscarNome2 = prompt("Digite seu nome de usuário")
                let verifNome2 = arrUsuarios.find((usuário) => usuário.Nome === buscarNome2)
                if(verifNome2){
                    let buscarSenha2 = prompt(`Insira sua senha, ${buscarNome2}`)
                            if(buscarSenha2 == verifNome2.Senha){
                                arrUsuarios.splice(verifNome2)
                }   else {
                        alert("Senha incorreta")
                        break;
                    }
            }   else {
                    alert("Nome inserido não encontrado")
                    break;
            }

    case "s":
        continuar = false;
        break;
        }

} while(continuar);