const testeNumber = [2, 4, 6, 8, 10, 12, 20];

const soma = testeNumber.reduce((partida, valorAtual, index) => {
    console.log(`partida ${partida}`)
    console.log(`valorAtual ${valorAtual}`)
    console.log(`index ${index}`)

    return  partida + valorAtual + index
})

console.log(soma)