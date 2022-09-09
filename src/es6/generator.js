function* example(array) {
    for (let value of array) {
        yield value;
    }
}

let arr = ['Cronos', 'Odin', 'Thor', 'Zeus'];

const it = example(arr);
console.log(it.next().value);
console.log(it.next().value);