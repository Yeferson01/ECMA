//Borrar espacios antes o despues de un archivo
let string = '           Cronos          ';
console.log(`String antes de los trim
${string}
String despues de trimStart
${string.trimStart()}
String después de trimEnd
${string.trimEnd()}
String después de ambos
${string.trimStart().trimEnd()}`);