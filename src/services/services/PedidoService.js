import http from '../../common/http-common';
const API_URL = "pedido/";

const create = (data) => {
    return http.mainInstance.post(API_URL + "create", {
        precoTotal: data.precoTotal,
        produtos: data.produtos,
        nomeCliente: data.nomeCliente,
        formaPagamento: data.formaPagamento,
        status: data.status || 'pendente'
    });
};

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const updateStatus = (id, status) => {
    return http.mainInstance.put(API_URL + `updateStatus/${id}`, { status });
};

const findByCliente = (nomeCliente) => {
    return http.mainInstance.get(API_URL + `findByCliente?nome=${nomeCliente}`);
};

const PedidoService = {
    create,
    findAll,
    findById,
    updateStatus,
    findByCliente,
}

export default PedidoService;