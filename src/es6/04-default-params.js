//Antes, para establecer parametros por defecto se hacia dentro del bloque con || y despues de inicializar

function person(name, age, country) {
    var name = name || 'Majo';
    var age = age || 7;
    var country = country || 'CO';
    console.log(name, age, country);
}

person();
person('Lina', 28, 'US');

//ES6 permite establecer los parametros por defecto en los parentesis

function newAdmin(name = 'Juan', age = 8, country = 'CL') {
    console.log(name, age, country);    
}

newAdmin();
newAdmin('Cronos', 23, 'VZ');