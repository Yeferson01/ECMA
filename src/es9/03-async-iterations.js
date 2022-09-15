//Podemos crear una funcion async y generator
async function* gen() {
    yield await Promise.resolve('Resolve');
    yield await Promise.resolve('Resolve2');
    yield await Promise.resolve('Resolve3');
    yield await Promise.reject('Reject');
}

//No se puede hacer mas llamados then que resolves disponibles
const other = gen();
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response))
other.next().catch(err => console.log(err))