const numb = 50;
const numbFloat = 30.104004;

console.log(Number.isNaN('ds'));
console.log(Number.isNaN(4+5));
console.log(Number.isInteger(30)) /// confere se é um número inteiro;
console.log(Number.isInteger(30.30404924929)); // é um float;
console.log(Number.isInteger(numb));
console.log(Number.parseFloat('99.50'));
console.log(Number.parseFloat('100 reais')); // converte a string p float;
console.log(Number.parseFloat('R$ 100')); // retorna Not a number;  NaN


console.log(Number.parseInt('99.50'))
console.log(Number.parseInt(5.403249394934939, 10));

console.log(numbFloat.toFixed()); // arredonda p baixo ou cima dependendo >5;
console.log(numbFloat.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // conversão p moeda local;

console.log(Math.abs(numbFloat))// numero absoluto (não negativo);
console.log(Math.ceil(numbFloat)) // arredonda p cima;
console.log(Math.floor(numbFloat)) // arredonda pra BaseAudioContext;
console.log(Math.round(numbFloat)); // arredonda automático, parecido com toFixed.
console.log(Math.PI);
console.log(Math.round(Math.random(1, 10) * 10));