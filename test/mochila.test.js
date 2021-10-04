const mochilaGulosa = require('../src/mochila')

describe('Problema da mochila - Fracionada', () =>  {
    it('Caso entrada ordenada ascendente - Resultado esperado 240', () => {
        const arr = [
            {
                valor: 60,
                peso: 10
            },
            {
                valor: 100,
                peso: 20
            },
            {
                valor: 120,
                peso: 30
            },
        ]
        const capacidate = 50
        const result = mochilaGulosa(capacidate, arr)
        const sum = result.reduce((a,b) => a+b.valor, 0)
        expect(result).toEqual([
            {
                valor: 60,
                peso: 10
            },
            {
                valor: 100,
                peso: 20
            },
            {
                valor: 80,
                peso: 30
            },
        ])
        expect(sum).toEqual(240)
    })

    it('Caso entrada ordenada decrescente - Resultado esperado 220', () => {
        const arr = [
            {
                valor: 120,
                peso: 30
            },
            {
                valor: 100,
                peso: 20
            },
            {
                valor: 60,
                peso: 10
            },
        ]
        const capacidate = 50
        const result = mochilaGulosa(capacidate, arr)
        const sum = result.reduce((a,b) => a+b.valor, 0)
        expect(result).toEqual([
            {
                valor: 120,
                peso: 30
            },
            {
                valor: 100,
                peso: 20
            },
        ])
        expect(sum).toEqual(220)
    })
})
