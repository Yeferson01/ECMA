//FLAT -> retorna una matriz de cualquier submatriz
let arr = [2, 4, 6, 8, 10, [3, 5, 7, 9, [2, 3, 5, 7]]];
console.log(arr.flat(3)); //Nos retorna una sola matriz con todos los elementos, incluyendo los de las submatrices

//FLATMAP -> hace operaciones con cada elemento de una matriz
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(v => [v, v*2])); //A cada elemento de la matriz, mostrarlo y luego mostrar el doble de ese elemento
