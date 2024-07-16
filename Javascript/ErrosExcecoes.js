mult = (a,b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        throw Error("Forneça apenas números!")
    }
    else {
        console.log((a+b) * 2);
    }
}

// mult(4,'dimitri');

let teste =""
try{
    teste = mult(3, "x");
}catch(e){ /// o e, recebe o throw.
    console.log(e);
}