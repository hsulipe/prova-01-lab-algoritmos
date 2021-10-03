module.exports = (capacidate, itens) => {
    let load = 0;
    const output = []
    for (let i = 0; load < capacidate && i < itens.length; i++) {
        let fração = 0
        if(itens[i] <= capacidate - load) {
            fração = itens[i].peso
            output.push(itens[i]);
        }
        else {
            fração = ((capacidate - load)/itens[i].peso)
            output.push({
                valor: itens[i].valor,
                peso: fração
            })
        }
        load += fração
    }
    return output;
}