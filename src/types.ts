type User = {
	firstName: string;
	lastName: string;
	age: number
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

type user = {
    firstName: string;
    lastName: string;
    age: number;   
}

type admin = {
    firstName: string;
    lastName: string;
    age: number;   
    role: string;
}

type userOrAdmin = user | admin; 

function Greet1(g:userOrAdmin){
    console.log(`Hello ${g.firstName} ${g.lastName}`);
}

function Greet(g : user | admin){
    console.log(`Hello ${g.firstName} ${g.lastName}`);
}

interface user1 {
    age : number | string;
}