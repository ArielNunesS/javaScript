class Hotel{        // criando classe hotel
    Id
    Nome
    Telefone
    ReservasDoHotel
    constructor(nome, id, telefone){
        this.Nome = nome
        this.Id = id
        this.Telefone = telefone
        this.ReservasDoHotel = []
    }
}

class Reserva{        // criando classe reserva
    IdReserva
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.IdReserva = idReserva
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let j;
let hoteis = []       // arrays para salvar hoteis e reservas
let reservas = []

function cadastrarHotel(id, nome, telefone){
    nome = prompt('Crie um nome para o hotel')
  do{
    id = parseInt(prompt('Crie uma ID de 5 dígitos para seu hotel (número de identificação)'))
      if (!/^\d{5}$/.test(id)) {               // validando se o id inserido possui 5 dígitos
        alert('Por favor, insira um número de id válido');
      }
  }
  while(!/^\d{5}$/.test(id))                  // repetir até o usuário inserir um id válido

  do{
    telefone = (prompt('Digite o telefone para contato do hotel \n __ _____-____'))
    if (!/^\d{2}\s\d{5}-\d{4}$/.test(telefone)){         // validando o formato inserido em 'telefone'
      alert('Por favor, insira um número de telefone válido');
    }
  }
  while(!/^\d{2}\s\d{5}-\d{4}$/.test(telefone));         // loop vai repetir até que o valor inserido seja no formato __ _____-____

    let hotel = new Hotel(nome, id, telefone)
    hoteis.push(hotel)
    return hotel
}

let i = 0             // criando index fora da função para evitar erros
function cadastrarReserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida){
  let numeroAleatorio = 0
  numeroAleatorio = Math.floor(Math.random() * 90000) + 10000    // criando id para a reserva; +10000 garante que o número tenha 5 dígitos
  idReserva = numeroAleatorio
  let hotelDaReserva = prompt(`Insira o nome do Hotel em que gostaria de se hospedar`)
      for(i = 0; i <= hoteis.length; i++){
      if(hotelDaReserva == hoteis[i].Nome){       // verificando se o hotel existe
        idHotel = hoteis[i].Id;                   // vinculando a reserva ao hotel escolhido
        break;
      } else {
        console.log('Hotel não encontrado, buscando hotel...')
      }
    }
    nomeResponsavel = prompt('Informe o nome do responsável pela reserva')

  do{
    diaEntrada = prompt('Qual será a data de entrada da reserva? __/__ (dia/mês)')
    if (!/^\d{2}\/\d{2}$/.test(diaEntrada)) {             // definindo o formato para inserir a data
      alert('Por favor, insira um número válido no formato __/__.');
      continue
  }
    diaSaida = prompt('Qual será a data de saída da reserva? __/__ (dia/mês)')
    if (!/^\d{2}\/\d{2}$/.test(diaSaida)) {
      alert('Por favor, insira um número válido no formato __/__.');
      continue
    }

    break;                // quebrando o loop caso os dois valores inseridos sejam válidos

    } while (true);

    let reserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    reservas.push(reserva)
    hoteis[i].ReservasDoHotel.push(reserva)           // atribuindo reserva na array de reservas de seu hotel correspondente
}

cadastrarHotel()
cadastrarReserva()
let continuar = true

while(continuar){         // criando loop para cadastrar mais hotéis ou reservas
  let pergunta = prompt('Gostaria de cadastrar novo hotel, nova reserva, ou sair? h / r / s')
  if(pergunta == 'h'){                      
    cadastrarHotel()
  }                       // usando if ao invés de switch case para evitar erros

  if(pergunta == 'r'){
    cadastrarReserva()
  }

  if(pergunta == 's'){
    continuar = false
   }
  }


function exibirInfoHotel(){
  let buscarId = Number(prompt('Insira a id de um Hotel'))      // buscar hotel pela id e exibir informações
  j = 0
    for(j = 0; j < hoteis.length; j++){
      if(buscarId == hoteis[j].Id){
          break;
      }
    }

    if(buscarId){
    console.log('===== Exibindo reservas do Hotel ===== ')
    console.log(hoteis[j].ReservasDoHotel)          // exibindo informações do hotel correspondente ao id inserido

  } else {
    console.log('Hotel não encontrado, voltando a tela de início')
    continuar = true
  }
}

exibirInfoHotel()

function exibirInfoReserva(){
  let buscarIdReserva = Number(prompt('Insira a id de uma reserva'))      // buscar reserva pela id e exibir informações
  j = 0
    for(j = 0; j < reservas.length; j++){
      if(buscarIdReserva == reservas[j].IdReserva){
          break;
      }
    }

    if(buscarIdReserva){
    console.log('===== Exibindo informações da reserva ===== ')
    console.log(reservas[j])          // exibindo informações do hotel correspondente ao id inserido

  } else {
    console.log('Reserva não encontrada, voltando a tela de início')
    continuar = true
  }
}

exibirInfoReserva()