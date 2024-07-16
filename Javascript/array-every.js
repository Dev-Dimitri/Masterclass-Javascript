let arr_1 = [2, 4, 6, 8, 10, 20, 30, 40];


arr_1.every(element => {
    element >= 2 ? console.log("todos os elementos são maiores que o condicional!") : console.log("falso")
})

//forEach: Itera sobre elementos para executar efeitos colaterais. Não retorna nada.
//filter: Cria um novo array com elementos que passam em um teste.
//every: Retorna um booleano indicando se todos os elementos passam em um teste.
//map: Cria um novo array transformando cada elemento.