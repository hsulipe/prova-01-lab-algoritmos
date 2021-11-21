const mochilaGulosa = require("./mochila");

module.exports = (capacidade, itens) => {
  const sorterdItens = itens.sort(
    (cur, prev) => prev.valor / prev.peso - cur.valor / cur.peso
  );
  return mochilaGulosa(capacidade, sorterdItens);
};
