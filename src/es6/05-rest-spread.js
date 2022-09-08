//asignacion de desestructuracion, podemos crear unas variables en los corchetes y asignarlas a un array

//Arrays
let arr = ['Cronos', 'Zeus', 'Hades'];
let [a, b, c] = arr;
console.log(a, b, arr[2]);

//Objects
let user = {
    name: 'Cronos',
    age: 23, 
    country: 'CO'
};
let {name, age, country} = user;
console.log(name, age, country);

/*Spread operator -> operador de propagacion (...), nos permite crear una variable que obtiene valores de un objeto y otras 
variables si es necesario. Con arrays los toma como objetos*/
let person = {
    name: 'Lina',
    age: 28
};
let countries = 'ES';
let id = 1;
let data = {id, ...person, countries};
console.log(data);

//REST nos permite reservar n parametros, cuando no sabemos cuantos argumentos vamos a enviar
function add(num, ...values) {
    console.log(values);
    console.log(num + values[3]);
    return num + values[2];
}
let num2 = add(5, 2, 8, 3, 5, 7);
console.log(`Result that was returned ${num2}`);
console.log(add(1, 2, 3, 4, 5));

//Object literals -> permite retornar valores (objetos) sin ser asignados sus indices name: name, etc 
function someone(name, age, country) {
    return {
        name,
        age,
        country
    }
}
let person2 = someone('Majo', 7, 'BR');
console.log(person2);
console.log(someone('Juan', 8, 'EC'));