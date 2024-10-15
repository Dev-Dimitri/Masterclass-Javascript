const buscaDados = (id) => {
    const url = `https://dummyjson.com/user/${id}`
    console.log(url);

    return fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Não foi possível encontrar o usuário ' + id);
        }
        return response.json();
    })
    .then((data) => {
        return data;
    })

}

const getById = () => {
    const idField = document.getElementById("id").value;

    buscaDados(idField).then((data) => {
        const resultElement = document.getElementById('resultado');
        if (data) {
            const filterData = [];
            const {firstName, lastName, age, gender, birthDate} = data;
            filterData.push(firstName, lastName,age , gender, birthDate)

            resultElement.innerHTML = JSON.stringify(filterData, null, 2); // Exibe os dados
        } else {
            resultElement.innerHTML = "User não encontrado."; // Mensagem em caso de erro
        }
    });
};