import http from '../../common/http-common';
const API_URL = "carrinho/";

const adicionarItem = (data) => {
    return http.mainInstance.post(API_URL + "adicionarItem", {
        produtoId: data.produtoId,
        quantidade: data.quantidade,
        usuarioId: data.usuarioId
    });
};

const removerItem = (itemId) => {
    return http.mainInstance.delete(API_URL + `removerItem/${itemId}`);
};

const atualizarQuantidade = (itemId, quantidade) => {
    return http.mainInstance.put(API_URL + `atualizarQuantidade/${itemId}`, { quantidade });
};

const obterCarrinho = (usuarioId) => {
    return http.mainInstance.get(API_URL + `obterCarrinho/${usuarioId}`);
};

const limparCarrinho = (usuarioId) => {
    return http.mainInstance.delete(API_URL + `limparCarrinho/${usuarioId}`);
};

const CarrinhoService = {
    adicionarItem,
    removerItem,
    atualizarQuantidade,
    obterCarrinho,
    limparCarrinho,
}

export default CarrinhoService;