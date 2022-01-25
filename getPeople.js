class Person {

    constructor(fn, ln, age, email) {
        this.fn = fn;
        this.ln = ln;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.fn} ${this.ln} ${this.age} ${this.email}`;
    }
    static getPeople() {
        return [new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), new Person('Kingsland'), new Person('Stephan', 'Johnson', 25,), new Person('Gabriel', 'Peterson', 24, 'g.p@gamil.com')]
    }
    toString() {
        return `${this.fn} ${this.ln} ${this.age} ${this.email}`;
    }
}
let person = `${this.fn} ${this.ln} ${this.age} ${this.email}`;
console.log(person.toString())