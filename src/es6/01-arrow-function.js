//Arrow function o funciones de flecha, buscan simplificar y crear codigo mas entendible, reestructurando la forma de crear funciones

function add(num) {
    return num + num;
}

console.log(add(75));

const add = num => num + num;
console.log(add(34));
