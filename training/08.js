let arrNomes = [];
let arrEmails = [];
let arrSenhas = [];

document.getElementById("botaoCadastro").addEventListener('click', function(){
    document.getElementById("formularioCadastro").style.display = "block";
    document.getElementById("formularioLogin").style.display = "none";
});

document.getElementById("botaoLogin").addEventListener('click', function(){
    document.getElementById("formularioCadastro").style.display = "none";
    document.getElementById("formularioLogin").style.display = "block";
});


document.getElementById("confirmarCadastro").addEventListener('click', function(){
    let nome = document.getElementById("usernameCadastro").value;
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    if(document.getElementById("senhaCadastro").value.length < 8){
        alert("Senha inválida (min. 8 dígitos)")
        document.getElementById("senhaCadastro").value = '';
    }   else{
            arrNomes.push(nome);
            arrEmails.push(email);
            arrSenhas.push(senha);
        
            document.getElementById("usernameCadastro").value = '';
            document.getElementById("emailCadastro").value = '';
            document.getElementById("senhaCadastro").value = '';
    }
});

document.getElementById("confirmarLogin").addEventListener('click', function(){
    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("senhaLogin").value;

        for(let i = 0; i <= arrNomes.length; i++){
            if(document.getElementById("emailLogin").value == arrEmails[i]){
                if(senha = document.getElementById("senhaLogin").value == arrSenhas[i]){
                    alert("Login bem sucedido");

                    document.getElementById("usernameCadastro").value = '';
                    document.getElementById("emailCadastro").value = '';
                    document.getElementById("senhaCadastro").value = '';
                
                }   else {
                        alert("Senha incorreta");
                }
            }   else {
            }
        }
});