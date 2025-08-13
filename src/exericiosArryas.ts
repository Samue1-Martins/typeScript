// Exercício 1: Declaração e Tipagem de Arrays
// Objetivo: Praticar a declaração de arrays e a tipagem explícita.

// Crie um array chamado numeros que contenha os números de 1 a 5. O array deve ser tipado para aceitar apenas number.
// Crie um array chamado nomes que contenha três nomes de sua escolha. O array deve ser tipado para aceitar apenas string.
// Crie um array chamado misturado que possa conter tanto strings quanto numbers. Atribua alguns valores a ele.
// Imprima o conteúdo de cada array no console.

const numeros: number[] = [1, 2, 3, 4, 5];
const nomes: string[] = [];
const misturado: (string | number)[] = ["Subasquitao", 23]

nomes.push("Samira", "Chica", "Magali")

console.log(numeros)
console.log(nomes)
console.log(misturado)

// Exercício 2: Manipulação de Arrays
// Objetivo: Usar métodos comuns de manipulação de arrays como push, pop, map e filter.

// Crie um array de numbers chamado notas com alguns valores (por exemplo, [7, 8, 5, 9, 6]).
// Adicione a nota 10 ao final do array usando o método push.
// Remova a última nota do array usando o método pop.
// Crie um novo array chamado notasDobro que contenha o dobro de cada nota do array original, usando o método map.
// Crie um novo array chamado notasAprovadas que contenha apenas as notas maiores ou iguais a 7, usando o método filter.
// Imprima todos os arrays resultantes no console.

const notas: number[] = [7, 8, 9, 6]
console.log(notas)
notas.push(10)
console.log(notas)
notas.pop()
console.log(notas)

const notasDobro: number[] = [7, 8, 9, 6];
function dobroNotas(notas: number) {
    return notas * 2;
}
console.log(notasDobro.map(dobroNotas))

const notasArpovadas: number[] = [4, 5, 8, 9];
function maiorQueSete(notas: number) {
    return notas >= 7;
}
console.log(notasArpovadas.filter(maiorQueSete))

// Exercício 3: Arrays de Objetos e Iteração
// Objetivo: Trabalhar com arrays de objetos e praticar a iteração.

// Crie uma interface chamada Produto com as propriedades nome (string) e preco (number).
// Crie um array chamado carrinho que contenha três objetos do tipo Produto.
// Use um laço for ou o método forEach para iterar sobre o array carrinho e imprimir o nome e o preco de cada produto.
// Crie uma função chamada calcularTotal que receba um array de Produtos e retorne a soma total dos preços (number).
// Chame a função com o array carrinho e imprima o resultado.

interface produto {
    nome: string,
    preco: number
}

const carrinho: produto[] = [
    { nome: "Manete", preco: 50 },
    { nome: "Fone", preco: 250 },
    { nome: "Teclado", preco: 150 },
];

carrinho.forEach(c => {
    console.log(c.nome, c.preco)
})

const calcularTotal = (produtos: produto[]): number => {
    let total = 0;
    produtos.forEach(c => {
        total += c.preco;
    })
    return total;
}

const totaloCarrinho = calcularTotal(carrinho);
console.log(totaloCarrinho);