const mochilaGulosa = require('../src/mochila')

describe('Problema da mochila - Fracionada', () =>  {
    it('teste - 1: Caso base ordenação de entrada ascendente', () => {
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

    it('teste - 2: Caso inverso ordenação de entrada decrescente', () => {
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
    })
})