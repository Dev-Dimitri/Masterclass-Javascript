const formList = [4, 10, 100];
const backList = [4, 10, 12, 50, 60, 70, 80, 90, 100];

const novaLista = [30]

function comparativo(formList, backList) {
    // Itera sobre cada valor de formList
    formList.forEach(formItem => {
        // Verifica se o valor está presente em backList
        if (backList.includes(formItem)) {
            novaLista.push(formItem)
        }
    });
}

// Chama a função comparativo
comparativo(formList, backList)

console.log(novaLista)2