//Agrega caracteres a un string n veces  padStrar(n, 'value), padEnd()
let string = 'Cronos';

string = string.padStart((string.length*2), 'x').padEnd((string.length*3), 'x');
console.log(string);