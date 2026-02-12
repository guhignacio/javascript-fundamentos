
const pessoas = require("./pessoas");
const{ listarNomes, filtrarMaiores, filtrarMenores, nomesMaiusculos, contaMaiores, nomesMaioresEmMaiusculo } = require("./funcoes");

console.log("Nomes:", listarNomes(pessoas));
console.log("Maiores de 18:", filtrarMaiores(pessoas));
console.log("Menores de 18:", filtrarMenores(pessoas));
console.log("Nomes em maiúsculo:", nomesMaiusculos(pessoas));
console.log("Quantidade de maiores de 18:", contaMaiores(pessoas));
console.log("Nomes dos maiores de 18 em maiúsculo:", nomesMaioresEmMaiusculo(pessoas));