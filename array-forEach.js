let arr_2 = ["rafael", "name" , "Dimitri", "Teste", "Tratatata"]


//Propósito: Executa uma função em cada elemento do array, mas não retorna nada.

//Uso: Quando você quer percorrer um array para executar efeitos colaterais (como logs, atualizações de variáveis externas, etc.).

arr_2.forEach(element => {
    console.log(element.toUpperCase())
}); 

console.log(arr_2)