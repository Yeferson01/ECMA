//Mejoras en las Expresiones Regulares - Regular Expresions (RegEx)
const regex = /\b(Apple)+\b/g;
let string = 'Apple Kiwi Apple Orange Lemon Avocado';
for (let match of string.matchAll(regex)) {
    console.log(match);
}
