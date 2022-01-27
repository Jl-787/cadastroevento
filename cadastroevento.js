let dataEvento = new Date ("01/28/2022")
let dataHoje = new Date()

if(dataEvento > dataHoje) {
    console.log("Evento válido")
} else {
    console.log("Evento inválido")
}    

let idadeParticipante = '18'

if(idadeParticipante >= 18) {
    console.log("idade do participante aceitável,podemos cadastrar")
} else {
    console.log("idade do participante inválida para cadastro")
}

let listaParticipantes = ['Robson', 'Rodrigo', 'Glauco', 'João']

for(let contador =0; contador < listaParticipantes.length; contador ++) {
    console.log(listaParticipantes[contador])
}

let palestrantes = '10'

if(palestrantes >= 10) {
    console.log("idade do palestrante aceitável,podemos cadastrar")
} else {
    console.log("idade do palestrante inválida para cadastro")
}

let participantes = '100'

if(participantes <= 100) {
    console.log ("número de participantes válido para cadastro")
} else {
    console.log ("número de participantes excedeu, inválido para cadastro")
}