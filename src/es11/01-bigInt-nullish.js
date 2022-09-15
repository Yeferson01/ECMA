//BigInt -> nueva forma de referenciar numeros grandes y trabajar con ellos
let num = 889898546767673n;
let num2 = BigInt(889898546767673);

console.log(num);
console.log(num2);

//Nullish -> Para inicializar una variable con el valor de otra pero antes validar si esa otra es null o no y si lo es, asignar otro valor 
let n, m = 34;
let validate = m ?? 5; //Si m es null, validate vale 5, si no validate vale m
let validate2 = n ?? 5; //Si n es null, validate vale 5, si no validate vale n
console.log(validate);
console.log(validate2);
