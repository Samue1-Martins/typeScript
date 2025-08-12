// Exercícios de Iniciante em TypeScript
// Claro! Aqui estão alguns exercícios para você começar a praticar TypeScript. Eles cobrem conceitos básicos como tipos, interfaces, funções e classes.

// Exercício 1: Tipos Básicos e Interfaces
// Objetivo: Criar um tipo para um objeto e uma função que o utilize.
// Crie uma interface chamada Carro que tenha as seguintes propriedades:

// marca: string
// modelo: string
// ano: number

// Crie uma variável chamada meuCarro e atribua a ela um objeto que siga a interface Carro.
// Crie uma função chamada exibirDetalhesCarro que aceite um objeto do tipo Carro como parâmetro e imprima no console todos os seus detalhes.
// Chame a função com a variável meuCarro.
// TypeScript

// // Sua solução aqui...

interface Carro {
    nome: string;
    modelo: string;
    ano: number;
}

let meuCarro: Carro;

meuCarro = {
    nome: "305F",
    modelo: "Ferrari",
    ano: 2025
}

function exbibirDetalhesCarro(carro: Carro) {
    console.log(carro.nome)
    console.log(carro.modelo)
    console.log(carro.ano)
}

const exbibirDetalhesCarroArrowFunction = (carro: Carro) => {
    console.log(carro.nome)
    console.log(carro.modelo)
    console.log(carro.ano)
}

exbibirDetalhesCarro(meuCarro);
exbibirDetalhesCarroArrowFunction(meuCarro);


// Exercício 2: Funções com Tipos Explícitos
// Objetivo: Criar funções que recebem parâmetros tipados e retornam valores tipados.

// Crie uma função chamada calcularArea que receba a largura e a altura de um retângulo como number e retorne a área total (number).
// Crie uma função chamada isMaiorDeIdade que receba uma idade como number e retorne true se a idade for 18 ou mais, caso contrário, retorne false. O retorno deve ser do tipo boolean.
// Teste as duas funções com valores de sua escolha e imprima os resultados.

const caulcularArea = (largura: number, altura: number): number => { 
    let resultado  = largura * altura
    return resultado
}
console.log(caulcularArea(5,10))

const isMaiorDeIdade = (idade: number): boolean => {
    return idade >= 18 ? true : false;
    // if(idade >= 18){
    //     return true
    // }else{
    //     return false
    // }
}
console.log(isMaiorDeIdade(18))

// Exercício 3: Classes
// Objetivo: Criar uma classe com propriedades, um construtor e métodos.
// Crie uma classe chamada ContaBancaria com as seguintes propriedades:

// titular: string
// saldo: number (com um valor padrão de 0)

// Adicione um construtor que receba apenas o titular e inicialize o saldo em 0.
// Crie um método chamado depositar que receba um valor (number) e adicione-o ao saldo.
// Crie um método chamado sacar que receba um valor (number) e subtraia-o do saldo, mas apenas se o saldo for suficiente. Se não for, imprima uma mensagem de erro no console.
// Crie uma instância da classe ContaBancaria, faça algumas operações de depósito e saque, e imprima o saldo final.

class ContaBancaria {
    titular: string;
    saldo: number = 0;

    constructor(titular: string,  saldo: number) {
        this.titular = titular,
        this.saldo = saldo
    }

    depositar(valor : number) {
        if(valor > 0 ){
            let saldo = this.saldo += valor;
            console.log(saldo)
        }
    } 

    sacar(valor: number) {
        if(this.saldo >= valor){
            let saldo = this.saldo -= valor;
            console.log(saldo)
        }
        else{
            console.log("Não há saldo suficiente")
        }
    }
}

let usuarioBanco = new ContaBancaria("Samuel Martins", 20);
usuarioBanco.depositar(50)
usuarioBanco.sacar(10)

// Exercício 4: Tipos de União (Union Types) e Type Aliases
// Objetivo: Usar tipos de união para permitir múltiplos tipos e type aliases para criar tipos mais legíveis.

// Crie um type alias chamado Id que pode ser uma string ou um number.
// Crie uma função chamada buscarPorId que receba um id do tipo Id.
// Dentro da função, use uma verificação para saber se o id é uma string ou um number e imprima uma mensagem diferente para cada caso.
// Chame a função buscarPorId duas vezes, uma com um ID de tipo string e outra com um ID de tipo number.

type Id = string | number;

const buscarPorId = (id : Id) => {
    if(typeof id === "string"){
        console.log(`Buscando por ID de text: ${id}`)
    }else{
        console.log(`Buscando por ID de numérico: ${id}`)
    }
}

buscarPorId("20");
buscarPorId(20);