const students = [
    { nome: "Dimitri", nota: 8, },
    { nome: "Abc", nota: 10, },
    { nome: "Bca", nota: 3, },
    { nome: "BBc", nota: 2,  },
    { nome: "Cbb", nota: 6, },
    { nome: "Adc", nota: 7 },
]

let somaNota = 0;

for (let x in students){
    // console.log(students[x].nome)
    somaNota += students[x].nota      /// somaNota = somaNota+ students[x].nota
    console.log(somaNota)
}

let somaDes = [10, 20 ,30 ,40, 50, 60, 70, 80, 100]

let soma = 0;

//// for padrão somando valores do array.
for(let i = 0; i<somaDes.length; i++){
    soma += somaDes[i] 
    console.log(Math.random(soma)*(4 , 10))
}

// let xSoma = ""

// for(x in somaDes){
//     xSoma += somaDes[x] 
//     console.log(xSoma)
//     console.log(somaDes[x])
// }