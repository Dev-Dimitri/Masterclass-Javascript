//var, let , const
//var -> ES5 - cross-browser
//let e const -> ES2015+


/////Constante///////
const constar = "imutável"
console.log(constar);
//constar = "imutável 2"
//console.log(constar) irá quebrar, constante não pode ser alterada


////Let padrão /////////
let teste = "minha string"


///Demais declarações//

let usando_string = "Dimitri"
let usando_boolean = true;
let usando_qualquercoisa = 23
let usando_array_string = ["Dimitri", "Teste", "Dois"];
let usando_array_number = [2, 4, 6, 8, 10, 12]
let usando_array_misto = [2, "Dimitri", true, "2", false];
let_usando_array_objeto = {nome: "string", idade: "3", cpf: 60645153338}
let teste_undefined;
let teste_null = null;
console.log(teste_null)
let convertendo_to_string = toString(usando_array_misto);
console.log(typeof(convertendo_to_string))

///////////// concatenação e template string ////// 

console.log("Demonstrando uma frase concatenando dados " + usando_string);
console.log(`Demonstrando uma frase usando template strings ${usando_string}`);


/////consoles/////////

let devices = [
    {
      name: 'iPhone',
      brand: 'Apple'
    },
    {
      name: 'Galaxy',
      brand: 'Samsung'
    }
  ]

  for(i=0; i<10; i++){
    console.count(); // contagem da variável por padrão
  }
  
  console.count()
  console.log("Registrar algo no log");
  console.warn("Demonstrando warning")
  console.error("Mensagem de erro vermelha.");
  console.table(devices);

  console.log("%c param1: Mensagem a ser exibida" , "background-color: #FFFF; color:green");

  // console.clear(); ao usar o console é apagado. Utilizado em timeouts.