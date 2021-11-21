module.exports = (capacidade, itens) => {
  // Para a solução ótima requer que a entrada das moedas
  // esteja ordenada de forma ascendente. Caso contrário,
  // não retornará o resultado ótimo.

  let peso = 0;
  let valor = 0;

  for (let i = 0; peso < capacidade && i < itens.length; i++) {
    let quantidade = parseInt((capacidade - peso) / itens[i].peso);
    if (quantidade >= 1) {
      peso += itens[i].peso * quantidade;
      valor += itens[i].valor * quantidade;
    }
  }
  return valor;
};
