//variaveis
let nome = 'Luis Gustavo';
const idade = 25;

//function
function saudacao(nome) {
    return `Olá ${nome}`;
}

//arrow function
const soma = (a, b) => {
    return a + b;
};

//array
const numeros = [17, 20, 6, 5, 19, 11, 1];

//map
const dobrados = numeros.map(n => n * 2);

//filter

const pares = numeros.filter(n => n % 2 == 0);

console.log(saudacao(nome));
console.log(soma(5, 8));
console.log(dobrados);
console.log(pares);


const pessoas = [
    { nome: "Luis", idade: 21 },
    { nome: "yasmim", idade: 20 },
    { nome: "Luis Arthur", idade: 14 },
    { nome: "Maria Luisa", idade: 16 }
];

function maiores(pessoa) {
    if (pessoa.idade > 17) {
        return pessoa.nome;
    }
}

const maiores = ({nome, idade}) => idade>17 ? nome : null