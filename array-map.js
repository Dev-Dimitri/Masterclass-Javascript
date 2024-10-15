const allPersons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

const testeNumber = [2,4,6,8,10,12,20]

///map retorna uma nova lista. no caso doubleAge
const listaDoubleAge = allPersons.map(person => {
    const doubleAge = [];
    doubleAge.push(person.name, person.age * 3);
    console.log(doubleAge);
    return doubleAge;
});

console.log(listaDoubleAge);
console.log(allPersons)

const doubleNumber = []
console.log(doubleNumber)

testeNumber.map(double => {
    doubleNumber.push(double*2)
    return doubleNumber
})

console.log(doubleNumber)
