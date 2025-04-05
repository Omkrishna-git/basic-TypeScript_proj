interface Person {
    name: string;
    age: number;
    greet(): void;
}

interface Users {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

const person: Person = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};

function isEven(num : number) : boolean {
    if(!(num&1)) return true;
    else return false;
}

interface preson {
    name : string;
    age : number;
    address:{
        city: string;
        state: string;
        country: string;
        pincode : number;
      };
    entollmentNo : number;
    isCitizen : boolean;
}

function isLegal(p : preson) : boolean {
    if(p.isCitizen && p.age >= 18) return true;
    else return false;
}

person.greet();

interface people {
    name :string;
    age:number;
    greete: () => string;
}

let greete = (p : people) : string => {
    return `Hello ${p.name}, you are ${p.age} years old.`;
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}  