
let n1 = 2;
let n3 = 1;
let somatorio = n1 + n3;

// confere a comparação entre números " ==  "
console.log(typeof somatorio == 'number')


// comparador restrito, confere além dos números, a tipagem da variável.
console.log(typeof somatorio === 'number')

// maior igual
console.log(somatorio >= 6)

// menor igual
console.log(somatorio <= 6)

// comparador usando ternário
result = somatorio >= 6 ? console.log("maior que 6") : console.log("menor que 6")

