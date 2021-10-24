
abstract class Department {
    // private readonly _id: string;
    // private name: string;

    private hobbies: string[] = [];

    constructor( private readonly _id: string, public name: string) {
    }
    addHobby(...hobby: string[]) {
        this.hobbies.push(...hobby)
    }
    abstract describe(): void
}

class ITDepartment extends Department {

    private lastTask: string;

    describe() {
        console.log(`This is a ${this.name} department and we have already ${this.getCountOfEmployees()} employees`  )
    }

    get mostLastTask() {
        if(this.lastTask) {
            return this.lastTask;
        }
        throw new Error(`Last task doesn't exist!`)
    }

    set mostLastTask(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addTask(value)
    }

    constructor(id: string, name: string, private employees: string[], private tasks: string[]) {
        super(id, 'IT');
        this.lastTask = tasks[0];
    }

    addTask(task: string) {
        this.tasks.push(task);
        this.lastTask = task
    }

    addEmployees(name: string) {
        this.employees.push(name)
    }

    getCountOfEmployees() {
        return this.employees.length;
    }
}

const it = new ITDepartment('1', 'IT', ['Artash', 'Rob'], []);

it.addHobby('eat', 'drink', 'dance');
it.addTask('Recreate navbar');
console.log(it.mostLastTask)
it.addEmployees('Suro');
it.mostLastTask = 'Commit recent code about classes in typescript';
it.describe();
console.log(it);