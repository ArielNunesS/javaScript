let arrNomes = [];
let arrEmails = [];
let arrSenhas = [];

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

var menuInicioHidden = true;
function toggleMenuInicio() {
    menuInicioHidden = !menuInicioHidden;
    return menuInicioHidden;
}

document.getElementById("botaoInicio").addEventListener('click', function () {
    menuInicioHidden = !menuInicioHidden;
    console.log(menuInicioHidden);

    
if (menuInicioHidden == true) {
    return document.getElementById("menuInicio").style.display = "none";
} else {
    return document.getElementById("menuInicio").style.display = "block";
}
});

console.log(menuInicioHidden);