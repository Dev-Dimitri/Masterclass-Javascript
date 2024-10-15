const url = 'https://thingproxy.freeboard.io/fetch/https://newpbot.com.br/?lastkills';


document.addEventListener('DOMContentLoaded', () => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados!');
            }
            return response.text(); // Obtém o HTML da página
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Supondo que as mortes estejam em uma tabela, por exemplo
            const killsList = doc.querySelectorAll('seletor-da-tabela'); // Substitua pelo seletor real
            killsList.forEach(kill => {
                const playerName = kill.querySelector('seletor-do-nome').textContent;
                const killDate = kill.querySelector('seletor-da-data').textContent;
                console.log(`Jogador: ${playerName}, Data: ${killDate}`);
            });
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});