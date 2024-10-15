const buscarPokemon = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    console.log(url)

    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao buscar Pokemon!!");
        }
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .catch(e => 
        console.error("Erro", e))
} 

const mostraPokemon = () => {
    const fieldValue = document.getElementById("pokemon").value
    console.log(fieldValue)

    buscarPokemon(fieldValue).then((data) => {

        const habilidades = data.abilities.map(( { ability}) => ({
            name: ability.name,
            url: ability.url
        }))

        const habilidadesz = data.game_indices.map(( { version }) => ({
            name: version.name,
            url: version.url
        }))

        const game_indice = data.game_indices.map(( { game_index }) => ({
            game_index
        }))

        const resultadoElemento = document.getElementById('resultado'); // Elemento para exibir os dados
        resultadoElemento.innerHTML = JSON.stringify(game_indice, null, 2); // Exibe os dados no formato JSON
    }).catch(error => {
        console.error('Erro ao demonstrar dados:', error);
    });
}


document.getElementById("botaoConsulta").addEventListener("click", mostraPokemon);