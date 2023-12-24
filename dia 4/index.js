// Criando e definindo as variáveis

let fome = ''
let dinheiro = ''
let restauranteAberto = ''

fome = prompt('Você está com fome, sim ou não?')
dinheiro = prompt('Você está com dinheiro?')
restauranteAberto = prompt('Seu restaurante favorito está aberto?')







      if (fome === 'não' || dinheiro === 'não'){
            console.log('Hoje a janta será em casa');
}
      else if(dinheiro === 'sim' && restauranteAberto === 'sim'){
      console.log('Hoje a janta será no seu restaurante favorito!');
}
      else {
            console.log('Peça um delivery!');
}

// se tiver com fome, dinheiro e o restaurante aberto == jantar no restaurante
// se tiver fome e dinheiro e o restaurante fechado == delivery
// se tiver sem fome ou sem dinheiro == janta em casa