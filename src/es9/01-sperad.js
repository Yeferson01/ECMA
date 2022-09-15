//Mejoras al operador de propagacion, spread operator, permite asignar los valores de un objeto
const users = {
    userName: 'Cronos',
    level: '142',
    address: 'algo@algo.algo',
    age: 23
};

let {userName, ...values} = users;

console.log(`... Permite asignar todos o los restantes valores de un objeto`);
console.log(values);
console.log(userName);