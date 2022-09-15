//Promise.allSettled([]) -> Recibe un array con las promesas y las ejecuta, guarda el resutaldo de cada promesa dentro de un array y ejecuta un then

const promesa1 = new Promise((resolve, reject) => resolve('Reject'));
const promesa2 = new Promise((resolve, reject) => resolve('Resolve'));
const promesa3 = new Promise((resolve, reject) => resolve('Reject'));
const arr = [promesa1, promesa2, promesa3];

/*Promise.allSettled(arr).then(response => {
    console.log(response);
});
*/
//Promise.all([]) -> retorna una promesa, resolve si todas son exitosas con el resolve de cada promesa, reject si una es rechazada con el motivo de ese rechazo
Promise.all(arr).then(resolve => console.log(resolve)).catch(err => console.log(err));
