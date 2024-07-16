const desest = {"Nome": "Dimitri", idade: 26, "profissao": "Java Developer"}


const {Nome, ...rest} = desest;

console.log(rest)


// console.error(Nome + "%c Usando desestructuring", "background-color: green; color: blue")
// console.log(desestString)