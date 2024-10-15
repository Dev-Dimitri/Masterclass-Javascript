const batata = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("REJEITOU!")
    })
}, 5000)

console.log(batata)