const mochilaGulosa = require('../src/mochila')

describe('Problema da mochila - Fracionada', () =>  {
    it('teste - 1: Caso base', () => {
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
                valor: 120,
                peso: 20
            },
        ])
    })
})