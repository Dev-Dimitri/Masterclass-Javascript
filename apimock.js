const buscaDados = () => {
    return fetch('./dadosmock.json') // Retorna a promessa do fetch
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar dados!');
            }
            return response.json(); // Retorna a promessa da conversão em JSON
        })
        .then(data => {
            console.log("Dados recebidos:", data); // Aqui você acessa os dados
            return data; // Retorna os dados para uso posterior
        })
        .catch(error => {
            console.error('Erro:', error);
            throw error; // Rejoga o erro para tratamento futuro
        });
};

const demonstraDados = (cep) => {
    buscaDados(cep)
        .then(dados => {
            const resultadoElemento = document.getElementById('resultado'); // Elemento para exibir os dados
            resultadoElemento.innerHTML = JSON.stringify(dados, null, 2); // Exibe os dados no formato JSON
        })
        .catch(error => {
            console.error('Erro ao demonstrar dados:', error);
        });
};

// Exemplo de como você pode chamar demonstraDados
document.getElementById('botaoConsulta').addEventListener('click', demonstraDados);