const promesa = () => {
    let num = Math.floor(Math.random() * (41 - 19) + 19); 

    return new Promise((resolve, reject) => {
        (num >= 30)
            ? setTimeout(resolve('Your number is > 29'), 2000)
            : reject('your number is < 30');
    });
}

const anotherFn = async () => {
    const respuesta = await promesa();
    console.log(respuesta);
}

console.log('Before');
anotherFn();
console.log('After');