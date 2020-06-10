interface Person {
    talk(): void
}

class Teacher implements Person {
    talk(): void {
    }

    constructor(name: string) {
    }
}

class Student implements Person {
    private  _name: string;
    private age: number;
    private classRoom: string;

    constructor(name: string, age: number, classRoom: string) {
        this._name = name;
        this.age = age;
        this.classRoom = classRoom;
    }

    talk(): void {

    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}


let student = new Student("tt", 18, "dd");
student.name="344";
console.log(student.name)

function getPerson() {
    return Math.random() < 0.5 ? new Teacher("张老师'") : new Student("小明", 8, "三班");
}

let count = 5;
while (count-- > 0) {
    let person2 = getPerson();
    if (person2 instanceof Teacher) {
        console.log(person2)
    } else {
        console.log(person2)
    }
}

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

let dog = new Dog();
dog.name = "wawa";

console.log(dog.breed);
console.log(dog.name);


