let arrNomes = [];
let arrEmails = [];
let arrSenhas = [];

document.getElementById("listaInicio").style.position = "absolute";

document.getElementById("botaoCadastro").addEventListener('click', function () {
    document.getElementById("formularioCadastro").style.display = "block";
    document.getElementById("formularioLogin").style.display = "none";
});

document.getElementById("botaoLogin").addEventListener('click', function () {
    document.getElementById("formularioCadastro").style.display = "none";
    document.getElementById("formularioLogin").style.display = "block";
});


document.getElementById("confirmarCadastro").addEventListener('click', function () {
    let nome = document.getElementById("usernameCadastro").value;
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    if (document.getElementById("senhaCadastro").value.length < 8) {
        alert("Senha inválida (min. 8 dígitos)")
        document.getElementById("senhaCadastro").value = '';
    } else {
        arrNomes.push(nome);
        arrEmails.push(email);
        arrSenhas.push(senha);

        document.getElementById("usernameCadastro").value = '';
        document.getElementById("emailCadastro").value = '';
        document.getElementById("senhaCadastro").value = '';
    }
});

document.getElementById("confirmarLogin").addEventListener('click', function () {

    for (let i = 0; i <= arrNomes.length; i++) {
        if (document.getElementById("emailLogin").value == arrEmails[i] && document.getElementById("senhaLogin").value == arrSenhas[i]) {
            alert("Login bem sucedido");

            document.getElementById("emailLogin").value = '';
            document.getElementById("senhaLogin").value = '';
            break;

        } else {
            alert("Endereço de Email ou Senha incorretos");
            document.getElementById("emailLogin").value = '';
            document.getElementById("senhaLogin").value = '';
        }
    }
});

document.getElementById("botaoInicio").addEventListener('mouseenter', function () {
    document.getElementById("listaInicio").style.display = "list-item";
    setTimeout(() => {
        document.getElementById("listaInicio").style.opacity = 1;
    }, 10);
});

document.getElementById("botaoInicio").addEventListener('mouseleave', function () {
    document.getElementById("listaInicio").style.opacity = 0;
});