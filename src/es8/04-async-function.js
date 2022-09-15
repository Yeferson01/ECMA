function randomNumber() {
    return Math.floor(Math.random() * (30 - 1) + 1);
}

const promesa = () => {
    let num =  randomNumber();

    return new Promise((resolve, reject) => {
        (num < 15)
            ? setTimeout(resolve => {console.log(`Your number is < 15. Your number is:  ${num}`);}, 2000)
            : setTimeout(reject => {console.log(`Your number is > 14. Your number is: ${num}`);}, 1000);
    });
}

const anotherFn = async () => {
    const respuesta = await promesa();
    console.log(respuesta);
}

console.log('Before');
anotherFn();
console.log('After');