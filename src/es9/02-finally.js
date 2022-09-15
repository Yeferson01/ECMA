const example = () => {
    let num = Math.floor(Math.random() * (36 - 13) + 13);
    return new Promise((resolve, reject) => {
        if (num <= 24) {
            resolve(`Lucky the number is < 25, Number: ${num}`);
        } else {
            reject(`The number is > 24, Number: ${num}`);
        }
    });
}

example().then(response => console.log(response))
         .then(response => console.log('GoodBye lucky'))
         .catch(response => console.log(response))
         .finally(() => console.log('The end')); //Se agrega la opcion de ejecutar algo al final de una promesa

