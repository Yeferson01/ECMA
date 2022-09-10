//Devulve un array con los valores correspondiente a la propidades enumerables de un objeto 
let users = {
    userName: 'Cronos',
    age: 23,
    nationality: 'MX'
};

let arrayUsers = Object.values(users); 
console.log(arrayUsers);
console.log(arrayUsers[1]);