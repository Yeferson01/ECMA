//Para validar la existencia de una variable o un elemento de un objeto o array y no romper el flujo (?)
const users = {
    Cronos: {
        Country: 'Co',
        Age: 23
    },
    Lina: {
        Country: 'MX'
    }
};

console.log(users.Cronos);
//console.log(users.Juan.Country); // Esto genera error porque el elemento no existe
console.log(users?.Jaun?.Country?.());