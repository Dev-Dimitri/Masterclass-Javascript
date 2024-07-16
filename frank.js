const desestructuring = {"Nome": "Dimitri", "idade": 26, "Profissao": "Desenvolvedor"}

const { ...all } = desestructuring;

console.log(all);




const listaFrutas = ["laranja", "Banana", "Maçã", "Limão", "Melancia", "Acerola", "Siriguela"]


const listaFrutasSort = listaFrutas.sort();

const listaSortForEach = listaFrutas.forEach((keys, value, newList) => {
    console.log(`Iterando fruta: de indice ${keys} é a fruta ${value}`)
    
})

const listaToUpper = listaFrutas.map()

console.log(listaSortForEach);

console.log(listaFrutasSort);