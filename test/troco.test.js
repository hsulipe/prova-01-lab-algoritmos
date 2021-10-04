const trocoGuloso = require('../src/troco')

describe('Problema do troco', () =>  {
    it('Caso entrada ordenada ascendente - Resultado esperado 6', () => {
        const moedas = [1,2,5,10,20,50];
        const result = trocoGuloso(moedas, 240);
        const sum = Object.values(result).reduce((a,b) => a+b);
        expect(result).toEqual({
            50: 4,
            20:2,
            10:0,
            5:0,
            2:0,
            1:0,
        });
        expect(sum).toEqual(6);
    })

    it('Caso entrada ordenada decrescente - Resultado esperado 240', () => {
        const moedas = [50,20,10,5,2,1];
        const result = trocoGuloso(moedas, 240);
        const sum = Object.values(result).reduce((a,b) => a+b);
        expect(result).toEqual({
            50: 0,
            20:0,
            10:0,
            5:0,
            2:0,
            1:240,
        });
        expect(sum).toEqual(240);
    })
})