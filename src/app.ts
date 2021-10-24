class Department {
    // private readonly _id: string;
    // private name: string;

    private hobbies: string[] = [];

    constructor( private readonly _id: string, public name: string) {
        // this.name = n;
    }
    addHobby(...hobby: string[]) {
        this.hobbies.push(...hobby)
    }
    describe() {
        console.log(`Department(${this._id}):  ${this.name}`);
        console.log(`hobbies:  ${this.hobbies}`);
    }
}

const accounting = new Department('1', 'Accounting');
accounting.addHobby('eat', 'drink', 'dance');

accounting.describe();
// console.log(a)

console.log(accounting)