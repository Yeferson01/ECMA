class User {

    constructor(nombre, age, nationality) {
        this.name = nombre;
        this.age = age;
        this.nationality = nationality;
        console.log(`Welcome ${this.name}`);
    }

    greetings() {
        console.log('Hello whoever you are');
    }

    get uNationality() {
        return this.nationality;
    }

    set uNationality(nationality) {
        this.nationality = nationality
    }
}

const cronos = new User('Cronos', 23, 'CO');
cronos.greetings();
console.log(cronos.uNationality);
cronos.uNationality = 'CH';
console.log(cronos.uNationality);