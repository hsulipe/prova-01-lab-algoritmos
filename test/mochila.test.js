const mochilaGulosa = require("../src/mochila");

describe("Problema da mochila - Fracionada", () => {
  it("Caso entrada ordenada ascendente - Resultado esperado 240", () => {
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
    const result = mochilaGulosa(capacidate, arr);
    expect(result).toEqual(8320);
  });

  it("Caso entrada ordenada decrescente - Resultado esperado 220", () => {
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
    const result = mochilaGulosa(capacidate, arr);
    expect(result).toEqual(7500);
  });
});
