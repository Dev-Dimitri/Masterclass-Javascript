






///desestruturando obj


const personz = {nome: "Dimitri", idade: "27", profissao: "Dev"}

let { nome, profissao } = personz;

console.log(`Olá, meu nome é ${nome} e eu trabalho como ${profissao}`)





/////desestruturar array

var fruitList = ["banana","maçã","laranja","acerola","pitomba","caju","caja"]

let [ fruit_one, fruit_two ] = fruitList

console.log(fruitList)

console.log(fruit_one)
console.log(fruit_two)

///todos os valors com spread rest
let [...all] = fruitList

console.log(all)



const person = {name: "Joao", age:"32"}
const person2 = {name: "Jonas", age:"33"}
const person3 = {name: "Jay", age:"34"}
const person4 = {name: "Jones", age:"35"}
const person5 = {name: "Josh", age:"36"}


let friends = [person, person2, person3, person4, person5]

const [,,,,{name}] = friends

console.log(`Lista de names: e lista de age: ${name}` )





//desestruturando função de obj


const animalRequire = {   
    animalName: "Dog", 
    animalAge: "2", 
    animalWeight: "100lbs", 
    animalSkill: function(){

        const self_name = "teste"

        console.log(`O ${self_name} se move a 15km/h`)
        
        const msg = "Retornando algo na função!"
        return msg

    }
}


const { animalSkill } = animalRequire


console.log(animalSkill())

