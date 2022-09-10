//Devuelve una matriz o arrays que corresponden a los pares propios de un objeto, indice y valor

let users = {
    userName: 'Cronos',
    age: 23,
    nationality: 'CO'
};

let user = Object.entries(users);

console.table(user[0][1]);
console.table(user);