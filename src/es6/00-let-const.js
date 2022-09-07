//Se agregaron las key words let y const para trabajar con constantes y variables menos globales

var num = 34; //Variable reasignable
num = 51;
let num2 = 64; //Variable reasignable
num2 = 95;
const num3 = 87; //Variable no reasignable

console.log(`${num} ${num2} ${num3}`);

//En cuanto al scope, var es global sin importar el bloque en el que se declare, en cambio let y const solo funcionan en el bloque 
const test = () => {
    if (true) {
        try {
        var global = 'xD';
        let blockScope = 'no manches wey';
        const constBlockScope = 'Always the same';
        
        console.log(`var: ${global} 
let: ${blockScope}
const: ${constBlockScope}`);    
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    try {   
        console.log(`Fuera del bloque de decraracion`);
        console.log(`var: ${global}`);
        console.log(`let: ${blockScope}`);
        console.log(`const: ${constBlockScope}`);
    } catch (error) {
       console.error(`Error: ${error}`);
    }
}

test();