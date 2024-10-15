const fetchCep = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url)

    const filtroCep = [];

    return fetch(url).then((resposta) => {
        if(!resposta.ok){
            throw new Error("Erro ao buscar CEP!");
        }else {
           return resposta.json().
           then(({cep, bairro, localidade, estado, ddd}) => {
            filtroCep.push(cep, bairro, localidade, estado, ddd);
            
            return filtroCep;
           })
        }

    }).then((data) => {
        console.log(data);
        return data;
    })
}

const mostraCep = () => {
    const valorCep = document.getElementById("cep").value;
    fetchCep(valorCep).then((data) => {
        const resultElement = document.getElementById('resultado')
        if(data){
            resultElement.innerHTML = JSON.stringify(data);
        }else {
            resultElement.innerHTML = "CEP NÃO ENCONTRADO!"
        }

    })
}