// newObj = {Nome: "Dimitri", Idade: 27, Profissao: "DEV"}


// const {Nome, ...resto} = newObj;


// console.log(Nome);
// console.log(resto);

const students = [
    { "nome": "Dimitri", nota: 8, },
    { "nome": "Abc", nota: 10, },
    { "nome": "Bca", nota: 3, },
    { "nome": "BBc", nota: 2,  },
    { "nome": "Cbb", nota: 6, },
    { "nome": "Adc", nota: 7 },
]


const aprovados = students.filter(aprovados => {
return aprovados.nota > 6;
})

console.log(aprovados)