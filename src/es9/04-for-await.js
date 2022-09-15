const newFn = async (array) => {
    for await (let values of array) {
        setTimeout(() => {
            console.log(values);
        }, 2000);
    }
}

newFn(['Cronos', 'Lina', 'Juan', 'Majo']);
setTimeout(() => {
    console.log('after');
}, 1000);