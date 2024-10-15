const buscaCep = (valorCep) => {
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;
    console.log(url);
    return fetch(url) // Usando a variável url
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao buscar CEP!");
            }
            const objDesestruturado = []
            return response.json()
            .then(({cep, bairro, localidade, estado, ddd}) => {
                objDesestruturado.push(cep, bairro, localidade, estado, ddd);
                return objDesestruturado;
            });
           
        })
        .then((data) => {
            return data
        })
        .catch(e => {
            console.error("Erro", e);
            return null; // Retorna null em caso de erro
        });
};

const resultaCep = () => {
    const valorCep = document.getElementById("cep").value; // Captura o valor aqui
    buscaCep(valorCep).then((data) => {
        const resultElement = document.getElementById('resultado');
        if (data) {
            resultElement.innerHTML = JSON.stringify(data, null, 2); // Exibe os dados
        } else {
            resultElement.innerHTML = "CEP não encontrado."; // Mensagem em caso de erro
        }
    });
    };

// Adicione um evento de clique ao botão
document.getElementById("botaoConsulta").addEventListener("click", resultaCep);