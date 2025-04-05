let fname: string = prompt("Enter your name: ") ?? "";
console.log(`Hello ${fname}`);

function greeet(name: string){
    console.log(`Hello ${name}`);
}
greeet(fname);


// type inferencing
function addB(a:number,b:string){
    return a+b;
}


function addA(a:number,b:number) :number{ 
    return a+b;
}

// function with default parameter 
function delay(anotherfn: () => void){
    setTimeout(anotherfn, 1000);
}

// function that takes another function as an argument
function log(){
    console.log("Hello");
}

// pass the function as an argument
delay(log);

let greeting = () => {
    console.log("Hello");
}
