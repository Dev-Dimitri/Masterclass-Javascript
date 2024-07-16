
interface CepData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

const cep:string = '60416210';
const url:string = `https://viacep.com.br/ws/${cep}/json`;

async function buscarCep(url:string){


    const res = await fetch(url)

    const data = await res.json()

    return data;
}


buscaCep(url)
.then(data => {
    console.log(data.cep)
})





