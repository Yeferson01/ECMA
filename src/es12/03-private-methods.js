// # antes del nombre del metodo hace que el mismo sea privado, para trabajar con polimorfismo
class User {

    constructor(nombre, age, nationality) {
        this.name = nombre;
        this.age = age;
        this.nationality = nationality;
        //console.log(`Welcome ${this.name}`);
    }

    #speak() {
        return 'Hello';
    }

    greetings() {
        console.log('Hello whoever you are');
        console.log(this.#speak());
    }

    get getuNationality() {
        return this.nationality;
    }

    set #uNationality(newNationality) {
        this.nationality = newNationality
    }
}

const cronos = new User('Cronos', 23, 'CO');
//cronos.greetings();
console.log(cronos.getuNationality);
cronos.uNationality = 'CH';
console.log(cronos.getuNationality);
//console.log(cronos.speak());