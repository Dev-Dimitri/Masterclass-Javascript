let arr_1 = [2, 4, 6, 8, 10, 20, 30, 40];
let arr_2 = ["rafael", "name" , "Dimitri", "Teste", "Tratatata"]
// console.log(typeof arr_1);

// console.log(arr_2);
// console.log(arr_2.slice(3));
// console.log(arr_2);

// console.log(arr_2.values().next); // mostrará os valores;
// console.log(arr_2.splice(1)); // separa rafael do array.
// console.log(arr_2);
// console.log(arr_2.concat("Leyla", "Laís", "Liz")); // adciona ao novo array.
// console.log(arr_2); // 
// arr_1.push(100, 200) // adiciona ao fim do array 100 ,200
// console.log(arr_1)
// arr_1.pop(); // remove o ultimo elemento.
// console.log(arr_1);
// arr_1.pop(); // remove o ultimo elemento. 
// console.log(arr_1); // 
// const teste_array = [10, 20, 30, 40, 50 , 60];
// const teste_string = ['nome', 'nome2', 'nome3', 'nome4', 'nome5'];


// const shiftCarPop = teste_string.pop(); // remove o ultimo elemento e o retorna;
// const shiftCar = teste_string.shift(); // remove o elemento do inicio e o retorna;
// const carPush = teste_array.push(70,80,90); // adiciona ao fim do ultimo elemento valores;

// console.log(teste_array);
// console.log(shiftCar);
// console.log(shiftCarPop);
// console.log(teste_string.reverse()); // inverte a ordem dos elementos;
// console.log(teste_array.copyWithin(1, 2 , 5)); // alvo, inicio, final 
// console.log(teste_array.splice(3, 3)); // primeiro parÂmetro remove, segundo parÂmetro é quantos alimentos deseja trazer, caso não use o segundo, ele trás tudo.
// console.log(teste_array.concat(teste_string));
// console.log(teste_array.includes(10)); // se 10 está incluido
// console.log(teste_array.indexOf(50)); // indice do elemento no array;
// console.log(teste_string.lastIndexOf('o'));
// console.log(teste_string.join(': ' + teste_array)); // soma arrays com seus respectivos indices;
// console.log(teste_string.fill('testandoFill')); // sobrescreve todos os elementos com o valor em parâmetro;
// console.log(teste_string.slice(4)) // recorta o elemento passado em parâmetro e o retorna como array.
// console.log(teste_array.find((c) => {
//     return c < 50;
// }));

/// Iterando array
// for(i=0; i<arr_1.length; i++){
//     console.log(arr_1[i]);
// }


/// For Each e map
// let testeForEach = arr_1.forEach((valorPos, indice) => {
//     console.log("Iterando usando forEach");
//     setTimeout(() => {
//         console.log(`Valor de entrada na posição: ${indice} = ${valorPos}`);
//     })
 
// })

// let testandoForEach = arr_1.forEach((valorPosicao, indice) =>{
//     console.log("TestandoForEach");
//     setTimeout(() => {
//         console.log(`valor de entrada na posição: ${valorPosicao} :  ${indice}, ${typeof(valorPosicao)}`)
//     })
// })




// allPersons.forEach(duplicate => {
//     const listaDoubleAge = []

//     listaDoubleAge.push(duplicate.name, duplicate.age*3)

//     console.log(listaDoubleAge)
    
// })

// const person = {name: "Joao", age:"32"}
// const person2 = {name: "Jonas", age:"33"}
// const person3 = {name: "Jay", age:"34"}
// const person4 = {name: "Jones", age:"35"}
// const person5 = {name: "Josh", age:"36"}



// const allPersons = [person, person2, person3, person4, person5]


// console.log(allPersons)
// const listaDoubleAge = []

// allPersons.map(duplicate => {
    

//     listaDoubleAge.push(duplicate.name, duplicate.age*3)

//     console.log(listaDoubleAge)

//     return listaDoubleAge
// })

// console.log(listaDoubleAge)


///ou 
const person = {name: "Joao", age:"32"}
const person2 = {name: "Jonas", age:"33"}
const person3 = {name: "Jay", age:"34"}
const person4 = {name: "Jones", age:"35"}
const person5 = {name: "Josh", age:"36"}

const allPersons = [person, person2, person3, person4, person5]

console.log(allPersons)

const listaDoubleAge = allPersons.map(duplicate => {
    return {
        name: duplicate.name,
        age: duplicate.age * 3
    }
})

console.log(listaDoubleAge)

