class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${ this.name}!`;
    }

    getDescrition() {
        return `${this.name} is ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I am from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Student('Dan Martin', 54, 'Basket Weaving');
me.name = 'Fred Durst';

const other = new Traveler();

const traveler = new Traveler('Dan Martin', 54, 'Phoenix');

console.log(me.getDescrition());
console.log(other.getGreeting());
console.log(traveler.getGreeting());