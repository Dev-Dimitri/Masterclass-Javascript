const testeNumber = [2,4,6,8,10,12,20]


//lista vazia
const listaFiltrada = []


///filter criando uma nova lista pra dentro da variavel listaFiltrada
testeNumber.filter(filtro => {
    if(filtro > 10) {
        listaFiltrada.push(filtro)
    }
    return listaFiltrada
    
})

console.log(listaFiltrada)