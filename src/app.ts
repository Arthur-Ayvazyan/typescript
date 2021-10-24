// we can use this syntax
// type SumFn = (a: number, b: number) => number;

// or this syntax to describe how function should lock like
interface SumFn {
    (a: number, b: number): number;
}

const sum: SumFn = (a, b) => a + b;
console.log(sum(3, 4));
//////////////////////////////////////

interface Named {
    readonly name: string;
    readonly phone?: string;
    //question mark make property or method optional
}

interface Greetable extends Named{
    greet(phrase: string): void
}

class User implements Greetable {

    age: number;
    name: string;
    phone?: string
    //question mark make property or method optional
    // protected eat: boolean = true;
    constructor(name: string, age: number, phone?: string) {
        this.name = name;
        this.age = age;
        if(phone) {
            this.phone = phone
        }
    }

    greet(phrase: string) {
        return `${phrase} ${this.name}, I'm ${this.age}`
    }
}

let user1: Greetable;
user1 = new User('Arthur', 27);
console.log(user1.greet('Hi, my name is'));
console.log(user1)
