//Permite crear un objeto desde un array que contiene arrays (Map)
let entries = new Map([['Name', 'Cronos'], ['Age', 23], ['Country', 'CO']]);
console.log(entries);
console.log(Object.fromEntries(entries));