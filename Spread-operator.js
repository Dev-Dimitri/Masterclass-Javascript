let arr = [1,2,3,4,5,6,7];
let arr_2 = [2,4,6,8,10,12,14]


const concatArray = arr.concat(arr_2);

console.log(concatArray);

//usando spread;

console.log(...arr.slice(...arr_2));


///clonar obj usando spread operator



const user = {name: "Dimitri", email: "dymytryrs7@gmail.com"}


const newUser = user;

console.log(newUser)


newUser.name = "New NAME"
newUser.email = "new Email"

console.log(newUser)