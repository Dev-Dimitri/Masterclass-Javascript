///Função padrão ///

function soma (a,b){
    return a+b;
}
console.log(soma(2,4));

/// função encapsulada ///

//ex 1
const teste = soma (4,3)
console.log(teste);

//ex 2
const testeCreate = function (a) {
    return a*2;
}
console.log(testeCreate(12));

/// ARROW FUNCTION

soma_arrow = (a,b) => {
    return a+b
}
console.log(soma_arrow(6,12))

console.clear();

// setTimeOut com arrow function

// testeTimeOut = () => {
//     console.log("%c demonstrando timeout!", "background-color: green");

//     setTimeout(() => {
//         console.log("%cMensagem deve aparecer em 2s", "background-color: red")
//     }, 2000)
//     setTimeout(() => {
//         console.log("%c Após os 6 segundos, essa mensagem deverá aparecer em 3s", "background-color: blue");
//     }, 4000)
//     setTimeout(() => {
//         console.log("%c Por fim esta será a última mensagem e após 5s o console.clear() será executado!", "background-color: pink");
//     }, 6000)
//     setTimeout(() => {
        
//         console.clear();
//     }, 8000)
// }

// testeTimeOut();

/// função dentro de objeto //

let myObj = {
    nome: "Dimitri",
    sobrenome: "Almeida",
    demonstrandoFunctionObj: () => {
        console.log("Testando!");
    }
}


myObj.demonstrandoFunctionObj();