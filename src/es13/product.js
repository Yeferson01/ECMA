/*Ya no es necesario implementar la palabra async para poder usar await fuera de la funcion, es decir, podemos
implementar directamente await, pero dentro de una funcion SI es necesario

        PARA EJECUTAR ESTE EJEMPLO DEBE EJECUTAR EN LA CONSOLA: npm i node-fetch
*/

import fetch from 'node-fetch';
const API_URL = 'https://api.escuelajs.co/api/v1/products';

const response = await fetch(API_URL);
const products = await response.json();
export {products};


//Otro ejemplo
const API = 'https://api.escuelajs.co/api/v1';

let products2 = await fetch(`${API}/products`);
products2 = await products2.json();
let product = await fetch(`${API}/products/${products2[0].id}`);
product = await product.json();
let category = await fetch(`${API}/categories/${product.category.id}`);
category = await category.json();
console.log(products2);
console.log(product.title);
console.log(category.name);
