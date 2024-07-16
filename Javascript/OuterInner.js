const menu = document.querySelector('.menu')

menu.outerHTML; // todo o html do elemento;
menu.innerHTML // html interno
menu.innerText // texto sem tags.

menu.innerText = '<p>Texto</p> ' //a tag vai como texto;
menu.innerHTML = '<p>Texto</p>' // a tag será renderizada

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement.parentElement); // elementos filhos;
console.log(lista.nextSibling); // proximo elemento
console.log(lista.children) // listas filhas;
console.log(lista.children[4]) // lista filha na posição 4
console.log(lista.children[--lista.children.length]) // tamanho da lista filha.