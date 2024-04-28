function calcularTotal(ferramentas, comprar) {
    if (ferramentas.length == 0 || comprar.length == 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let resultado = 0;
    let ferramentasCompradas = [];

    for (let incrementoCompra = 0; incrementoCompra < comprar.length; incrementoCompra++) {
        for (let incrementoFerramenta = 0; incrementoFerramenta < ferramentas.length; incrementoFerramenta++){
            if (comprar[incrementoCompra] == ferramentas[incrementoFerramenta].nome) {
                resultado += ferramentas[incrementoFerramenta].preco;
                ferramentasCompradas.push(ferramentas[incrementoFerramenta].nome);
            }
        }  
    }

    if (ferramentasCompradas.length == 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    return `O valor a pagar pelas ferramentas (${ferramentasCompradas.join(', ')}) é R$ ${resultado.toFixed(2)}`;
}

module.exports = { calcularTotal };
