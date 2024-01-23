//  Criando Variáveis
const modelos = []
const anos = []
const preços = []
let cadastrar = ''
let continuar = true;
let contador = 0


//  Criando Loop
do{
    for(let i = 0; continuar; i++){
        modelos[i] = prompt('Qual modelo de carro você deseja cadastrar?')
        anos[i] = parseInt(prompt('Qual o ano do modelo escolhido?'))
        preços[i] = parseFloat(prompt('Qual o valor gostaria de atribuir ao modelo nº ' + (i + 1)))
        contador ++

      cadastrar = prompt('Gostaria de cadastrar mais um modelo? (s/n)')

      if(cadastrar !== 's'){
        continuar = false
    }
} }         while(continuar === true)


// Exibindo Modelo, Ano e Valor Individualmente
for(let i = 0; i < contador; i++){
    console.log(modelos[i] + ' - ' + anos[i] + ' - Valor = ' + preços[i])
}


// Ordenando as 3 arrays com base na ordem crescente de uma array (preços)
    const indexes = Array.from(preços.keys());
    indexes.sort((a, b) => preços[a] - preços[b]);

    const modelosOrdenados = indexes.map(index => modelos[index]);
    const anosOrdenados = indexes.map(index => anos[index]);
    const preçosOrdenados = indexes.map(index => preços[index]);

// Exibindo info ordenada
console.log('\n Modelos: ' + modelosOrdenados);
console.log('\n Ano: ' + anosOrdenados);
console.log('\n Valor: ' + preçosOrdenados);