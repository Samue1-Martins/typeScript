// tipos primitivos: number, string, boolean, object...

let nome: string;
nome = "Primeiros passos";

const frutas: string[] = [];

frutas.push("Maça");
frutas.push("Banana");

const pessoa: [string, number] = ["Jussimara", 400];


console.log(nome)
console.log(frutas)
console.log(pessoa)

//////////////////////////////////////////////////////////////////////////////////////
// Trabalhando com funções

function soma(a: number, b: number): number {
    return a + b;
}

const comprimentar = (nome: string): string =>{
    return `Olá ${nome}`;
}

console.log(soma(2, 3));
console.log(comprimentar("Samuel"));

const comprimentarVoid = (nome: string): void =>{
    console.log(`Olá ${nome}`);
}

comprimentarVoid("samuel")

/////////////////////////////////////////////////////////////////////////////////////
// Trabalhando com interfaces

interface User{
    nome: string;
    age: number;
    maior: boolean;
    estado: "solteiro" | "casado";
}

// type User = {
//     nome: string;
//     age: number;
//     maior: boolean;
//     estado: "solteiro" | "casado";
// }

let user : User;

user ={
    nome: "Samuel",
    age: 23,
    maior: true,
    estado: "solteiro"
};

const printUser = (user: User)=>{
    console.log(user.nome)
    console.log(user.age)
    console.log(user.maior)
    console.log(user.estado)
};

printUser(user);

/////////////////////////////////////////////////////////////////////////////////////
// Trabalhando com classe

class UserClass {
    public nome : string
    public idade : number
    private saldoBancario : number

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
        this.saldoBancario = 0;
    }
}

const usuario = new UserClass("maria", 22);

/////////////////////////////////////////////////////////////////////////////////////
// Trabalhando com herança

class Pessoa {
    nome: string;
    age: number;

    constructor(nome: string, age: number){
        this.nome = nome;
        this.age = age;
    }

    comprimentar(nome: string){
        console.log(`Olá, ${nome}`)
    }
}

interface Teste {
    salario: number;
    comer(): void;
}

class UsuarioDois extends Pessoa implements Teste {
    salario: number = 0;
    comer(): void {
        console.log("Comendo...")
    }
}

const userHeranca = new UsuarioDois("Danilo", 45);

userHeranca.comprimentar