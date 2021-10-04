module.exports = (capacidate, itens) => {
    // Para a solução ótima requer que a entrada das moedas 
    // esteja ordenada de forma ascendente. Caso contrário, 
    // não retornará o resultado ótimo.

    let load = 0;
    const output = []
    for (let i = 0; load < capacidate && i < itens.length; i++) {
        let fração = 0
        if(itens[i].peso <= capacidate - load) {
            fração = itens[i].peso
            output.push(itens[i]);
        }
        else {
            fração = (capacidate - load)/itens[i].peso
            output.push({
                valor: fração * itens[i].valor,
                peso: itens[i].peso,
            })
        }
        load += fração
    }
    return output;
}