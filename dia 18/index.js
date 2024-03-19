class Livro{
    Titulo
    Autor
    Editora
    AnoPublicação
    Disponibilidade
    constructor(titulo, autor, editora, anoPublicação){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicação = anoPublicação
        this.Disponibilidade = disponibilidade
    }
}

titulo = 'Olhos Prateados'
autor = 'Scott Cawthon'
editora = 'Intrínseca'
anoPublicação = 2017
disponibilidade = true

const livro1 = new Livro(titulo, autor, editora, anoPublicação, disponibilidade)

titulo = 'A Biblioteca da Meia Noite'
autor = 'Matt Haig'
editora = 'Bertrand Brasil'
anoPublicação = 2021
disponibilidade = true

const livro2 = new Livro(titulo, autor, editora, anoPublicação, disponibilidade)

titulo = 'Ultra-Aprendizado'
autor = 'Scott H. Young'
editora = 'HarperColins'
anoPublicação = 2021
disponibilidade = true

const livro3 = new Livro(titulo, autor, editora, anoPublicação, disponibilidade)

titulo = 'Gatilhos Mentais'
autor = 'Gustavo Ferreira'
editora = 'DVS Editora'
anoPublicação = 2019
disponibilidade = true

const livro4 = new Livro(titulo, autor, editora, anoPublicação, disponibilidade)

titulo = 'Entendendo Algoritmos'
autor = 'Aditya Y. Bhargava'
editora = 'Novatec Editora'
anoPublicação = 2017
disponibilidade = true

const livro5 = new Livro(titulo, autor, editora, anoPublicação, disponibilidade)

class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoDeLivros
    constructor(nome, endereço, telefone, acervoDeLivros){
    this.Nome = nome
    this.Endereço = endereço
    this.Telefone = telefone
    this.AcervoDeLivros = acervoDeLivros
}
}

nome = 'Biblioteca Silva'
endereço = 'Avenida Nereu Ramos, 2438, Itapema, Santa Catarina, Brasil'
telefone = '(48) 91877-2149'
acervoDeLivros = []
acervoDeLivros.push(livro1, livro2, livro3, livro4, livro5)

const biblioteca1 = new Biblioteca(nome, endereço, telefone, acervoDeLivros)
console.log(biblioteca1)

function buscarLivro(){
    let inserirTitulo = prompt('Insira o Título do Livro que deseja buscar')
    let buscaLivro = acervoDeLivros.find(livro => livro.Titulo === inserirTitulo)
    if(buscaLivro){
        console.log(buscaLivro)
    }
}

buscarLivro()

function emprestimo(){
    console.log('\n ===== Empréstimo de Livro =====')
    let selecionarLivro = prompt('Digite o nome do livro que gostaria de pegar')
    let pegarLivro = acervoDeLivros.find(livro => livro.Titulo === selecionarLivro)
    if(pegarLivro.Disponibilidade === true){
            console.log('O livro ' + selecionarLivro + ' agora é seu')
            pegarLivro.Disponibilidade = false
        }  else{
                console.log('O livro não está disponível')
        }
    }

function devolucao(){
    console.log('\n ===== Devolução de Livro =====')
    let selecionarLivro = prompt('Digite o nome do livro que gostaria de devolver')
    let devolverLivro = acervoDeLivros.find(livro => livro.Titulo === selecionarLivro)
    if(devolverLivro.Disponibilidade === false){
        console.log('O livro ' + selecionarLivro + ' foi devolvido com sucesso')
        devolverLivro.Disponibilidade = true
    } else {
        console.log('O livro já está na biblioteca')
    }
}

emprestimo()
devolucao()