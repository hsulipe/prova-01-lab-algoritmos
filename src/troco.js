module.exports = (moedas, troco) => {
    // Para a solução ótima requer que a entrada das moedas 
    // esteja ordenada de forma ascendente. Caso contrário, 
    // não retornará o resultado ótimo.

    const num_moedas = moedas.length;
    let retorno = {};
    let aux_troco = troco;

    for(let i = num_moedas - 1; i >= 0; i--) {
        const aux_moedas = parseInt(aux_troco / moedas[i]);
        aux_troco -= aux_moedas * moedas[i];
        retorno[moedas[i]] = aux_moedas;
    }

    return retorno;
}