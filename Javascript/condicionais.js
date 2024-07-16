///usando if else padrão ///

let teste = "Dimitri";
console.log(typeof(teste));

if(typeof(teste) === 'string'){
    console.log("É uma string", teste);
}
else{
    console.error("Não é uma string!");
}

//switch case// 

let testando_laranja = 'x'
switch(testando_laranja){

    case 'Laranja': console.log( "É uma laranja" );
    break;

    case 'Morango': console.log( "É um morango" );
    break;

    default: console.error("Caiu no default, por não ser compatível");
    break;
}

//// do while ///////

let teste_numero = 0;

do{
    //console.log(teste_numero);
    teste_numero++;
}while(teste_numero < 10);
//console.log(teste_numero);


////TÉRNARIO FOCUS ///////


///Usando if else padrão
// let salario = 6000.00;

// if(salario > 700.00 && salario <= 4000.00){
//     console.log("Salário de desenvolvedor jr")
// }
// else if(salario >4001.00 && salario < 7500.00){
//     console.log("Salário de desenvolvedor pleno")
// }
// else{
//     console.warn("Salário de desenvolvedor sênior")
// }

////Usando ternário

salario = 600;

retorno = salario > 700.00 && salario < 4000.00 ? "Desenvolvedor Junior" : salario > 4001.00 && salario < 7500.00 ? "Desenvolvedor pleno!" : "Desenvolvedor Sênior"
console.log(retorno)



///exemplo 2:

let testando_tern = 30
console.log(typeof(testando_tern));

retorno_tern = typeof(testando_tern) === 'string' ? console.error("É uma string") : console.error("Não é uma string!");



/// exemplo 3
let nz = 'dimitri'

let retornando = typeof(nz) === 'string' ? "É uma string" : typeof(nz) === 'number' ? "É número" : "É boolean!";

console.log(retornando);

/// Comparativos ///
let n1 = 16;
let n2 = 10;
console.log(n1 > n2);
console.log(n1< n2);
console.log(n1 >= n2 && n1<= n2);
