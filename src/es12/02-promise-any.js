//Promise.any([]) -> retorna la primer promesa resuelta satisfactoriamente
const promesa1 = new Promise((resolve, reject) => resolve('Reject1'));
const promesa2 = new Promise((resolve, reject) => reject('Resolve'));
const promesa3 = new Promise((resolve, reject) => reject('Reject2'));
const arr = [promesa1, promesa2, promesa3];

Promise.any(arr).then(response => console.log(response));