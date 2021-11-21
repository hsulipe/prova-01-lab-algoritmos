const mochilaAproximada = require("../src/mochila-aproximada");

describe("Problema da mochila - Aproximada", () => {
  it("Caso entrada ordenada ascendente - Resultado esperado 8320", () => {
    const arr = [
      {
        valor: 100,
        peso: 60,
      },
      {
        valor: 60,
        peso: 40,
      },
      {
        valor: 20,
        peso: 20,
      },
    ];
    const capacidate = 5000;
    const result = mochilaAproximada(capacidate, arr);
    expect(result).toEqual(8320);
  });

  it("Caso entrada ordenada decrescente - Resultado esperado 8320", () => {
    const arr = [
      {
        valor: 60,
        peso: 40,
      },
      {
        valor: 100,
        peso: 60,
      },
      {
        valor: 20,
        peso: 20,
      },
    ];
    const capacidate = 5000;
    const result = mochilaAproximada(capacidate, arr);
    expect(result).toEqual(8320);
  });
});
