
class Usuario {
    email;
    instagram;
    linkedIN;
    empresa;

    /// Aqui foi definido os parâmetros obrigatórios de instancia. // 
    constructor(empresa, instagram){
        this.empresa = empresa;
        this.instagram = instagram;
    }
}


const newUser1 = new Usuario();

newUser1.email = "dymytryrs7@gmail.com";
newUser1.empresa = "Uniodonto COOP"
newUser1.instagram = "dimiitri_7n"
newUser1.linkedIN = "dev_dimitri7"

console.log(newUser1);

const newUser2 = new Usuario("UNIODONTO COOP 2", "diimitri_7n");

console.log(newUser2);


// let mySocialMedia = {
//     "email": "dymytryrs7@gmail.com",
//     "instagram": "dimiitri_7n",
//     "linkedIN": "dev_dimitri7",
//     "empresa": "Uniodonto COOP"
// }

