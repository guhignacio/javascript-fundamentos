const listarNomes =(pessoas) => pessoas.map(p=> p.nome);
const filtrarMaiores =(pessoas) =>pessoas.filter(p=>p.idade>=18);
const filtrarMenores =(pessoas) =>pessoas.filter (p=>p.idade<18);
const nomesMaiusculos = (pessoas) =>pessoas.map(p => p.nome.toUpperCase());
const contaMaiores = (pessoas) =>pessoas.filter(p => p.idade >= 18).length;
const nomesMaioresEmMaiusculo = (pessoas) =>pessoas.filter(p => p.idade >=18).map(p => p.nome.toUpperCase());

module.exports = { listarNomes, filtrarMaiores, filtrarMenores, nomesMaiusculos, contaMaiores,nomesMaioresEmMaiusculo };