const meuCep = '60416210'

const minhaBusca = `https://viacep.com.br/ws/${meuCep}/json`

async function buscaCep(url){


    const res = await fetch(url)

    const data = await res.json();

    console.log(data)

    console.log(data.logradouro)

    return data;
}

buscaCep(minhaBusca)



