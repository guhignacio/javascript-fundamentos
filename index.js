/*const pessoas = require("./pessoas");
const { listarNomes } = require("./funcoes");

console.log(listarNomes(pessoas));
*/
const pessoas = require("./pessoas");
const{ listarNomes, filtrarMaiores, filtrarMenores, nomesMaiusculos } = require("./funcoes");

console.log("Nomes:", listarNomes(pessoas));
console.log("Maiores de 18:", filtrarMaiores(pessoas));
console.log("Menores de 18:", filtrarMenores(pessoas));
console.log("Nomes em maiúsculo:", nomesMaiusculos(pessoas));

listarNomes;
filtrarMaiores;
filtrarMenores;
nomesMaiusculos;
