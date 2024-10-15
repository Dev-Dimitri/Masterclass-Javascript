retornarValores = () => {
    let valorLog = document.getElementById("valor-cep").value;
    console.log(valorLog);
    document.getElementById("meuFormulario").addEventListener('submit', event => event.preventDefault)
}

valorCep = () => {
    addEventListener('submit', this.retornarValores());
    this.consultarCep();
    
}

consultarCep = () => {
    try {
        let cep = document.getElementById("valor-cep").value;

        if (cep == null || cep.lenght <= 8){
            throw("Forneça um cep válido!")
        }

        let url = `https://viacep.com.br/ws/${cep}/json/`

        fetch(url).then((response) =>{
            response.json().then((dados)=>{
                console.log(dados)
                let resultado = document.getElementById("demonstrativo")

                if(dados.cep == 'undefined'){
                    alert("Cep não encontrado!")
                } else {
                    setTimeout(()=> {
                        resultado.innerHTML =  
                        `<table id="demonstrativo"> 
                            <tr> 
                                <tr>Endereço: ${dados.logradouro} </tr> </br>
                                <tr>Complemento: ${dados.cep} </tr> </br>
                                <tr>Bairro: ${dados.bairro} </tr> </br>
                                <tr>Cidade: ${dados.localidade} - ${dados.uf} </tr>  </br>
                            </tr> </>
                        </table>` 
                    }, 3000)
                }
            })
        })
    }catch(e){
        alert(e);
    }
}