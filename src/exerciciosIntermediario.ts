// Exercício 1: Enums e Tipos de União Avançados
// Objetivo: Usar enums para criar tipos mais seguros e combiná-los com tipos de união.

// Crie um enum chamado StatusPedido com os seguintes valores: PENDENTE, PROCESSANDO, ENTREGUE, CANCELADO.
// Crie um tipo de união (type alias) chamado StatusDePagamento que pode ser uma das três strings: "Aprovado", "Negado" ou "Reembolsado".
// Crie uma função chamada atualizarStatus que receba um status do tipo StatusPedido e imprima uma mensagem diferente para cada status possível.
// Crie uma função chamada verificarPagamento que receba um status do tipo StatusDePagamento e imprima uma mensagem para cada status possível.

enum StatusPedido {
    PENDENTE,
    PROCESSANDO,
    ENTREGUE,
    CANCELADO
}

const atualizarStatus = (status: StatusPedido): void => {
    console.log(`O pagamento está: ${StatusPedido[status]}`)
}

type StatusDePagamento = "Aprovado" | "Reembolso" | "Cancelado"

const verificarPagamento = (status: StatusDePagamento): void => {
    console.log(`O pagamento está: ${status}`)
}

atualizarStatus(StatusPedido.PENDENTE);
verificarPagamento("Aprovado");

// Exercício 2: Tuplas
// Objetivo: Usar tuplas para criar arrays com número fixo de elementos e tipos pré-definidos.

// Crie um type alias chamado Coordenada que seja uma tupla com três elementos: o primeiro sendo a latitude (number), o segundo a longitude (number) e o terceiro uma descricao (string).
// Crie uma variável chamada pontoDeInteresse do tipo Coordenada e atribua a ela os valores [40.7128, -74.0060, "Estátua da Liberdade"].
// Crie uma função chamada exibirCoordenada que aceite uma tupla do tipo Coordenada e imprima cada um dos seus elementos de forma descritiva.
// Chame a função com a variável pontoDeInteresse.

type Coordenada = [number, number, string]
const pontoDeInteresse: Coordenada = [40.7128, -74.0060, "Estátua da Liberdade"]

const exibirCoordenada = (c: Coordenada) => {
    console.log(`A latitude é: ${c[0]}`)
    console.log(`A longitude é: ${c[1]}`)
    console.log(`A cidade é: ${c[2]}`)
}

exibirCoordenada(pontoDeInteresse);

// Exercício 3: Herança de Classes
// Objetivo: Praticar a herança para estender funcionalidades de classes-pai para classes-filhas.

// Crie uma classe base chamada Animal com as propriedades nome (string) e idade (number). O construtor deve receber e inicializar essas propriedades. Adicione um método fazerBarulho() que imprima um barulho genérico.
// Crie uma classe chamada Cachorro que herde de Animal. No construtor de Cachorro, receba o nome, a idade e uma nova propriedade raca (string). O construtor de Cachorro deve chamar o construtor da classe-pai (super).
// Sobrescreva o método fazerBarulho() na classe Cachorro para imprimir "Au au!".
// Crie uma classe chamada Gato que também herde de Animal e sobrescreva o método fazerBarulho() para imprimir "Miau!".
// Crie instâncias de Cachorro e Gato e chame o método fazerBarulho() de cada uma.

class Animal {
    nome: string;
    idade: number; 

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade
    }

    fazerBarulho(): void{
        console.log("AaAAaaaauuUUUUuUuUUU")
    }
}

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, idade: number, raca: string){
        super(nome, idade)
        this.raca = raca;
    }

    override fazerBarulho(): void {
        console.log("AUAU")
    }
}

class Gato extends Animal{

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    override fazerBarulho(): void {
        console.log("Miau")
    }
}

const novoCachorro = new Cachorro("marley", 2, "Buldog")

const novoGato = new Gato("Smeagle", 5)

novoCachorro.fazerBarulho();
novoGato.fazerBarulho();

// Exercício 4: Tipos Genéricos (Generics)
// Objetivo: Usar tipos genéricos para criar componentes reutilizáveis que funcionam com diferentes tipos de dados.

// Crie uma interface genérica chamada Box<T> com uma propriedade conteudo do tipo T.
// Crie uma função genérica chamada criarBox<T> que receba um conteudo do tipo T e retorne um objeto do tipo Box<T>.
// Crie uma função genérica chamada getConteudoBox<T> que receba um box do tipo Box<T> e retorne o seu conteudo.
// Use a função criarBox para criar uma caixa com um string e outra com um number.
// Use a função getConteudoBox para obter o conteúdo de ambas as caixas e imprima o resultado.

interface Box<T> {
    conteudo: T
}

function criarBox<T>(conteudo: T): Box<T> {
    return {conteudo}
}

function getConteudoBox<T>(box: Box<T>): T {
    return box.conteudo;
}

const caixaDeTexto = criarBox<string>("Olá, eu sou um tipo generico.")
const caixaDeNumero = criarBox<number>(123456789)

const conteudoTexto = getConteudoBox(caixaDeTexto)
console.log(`Conteúdo da caixa de texto: ${conteudoTexto}`); 

const conteudoNumero = getConteudoBox(caixaDeNumero)
console.log(`Conteúdo da caixa de número: ${conteudoNumero}`);

// function criarBox<T>(){
//     let state: T;

//     function get(){
//         return state;
//     }

//     function set(novoValor: T){
//         state = novoValor;
//     }

//     return{get, set}
// }

// let novoEstado = criarBox();

// novoEstado.get();
// novoEstado.set("Samira")