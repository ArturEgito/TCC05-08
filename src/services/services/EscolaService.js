import http from '../../common/http-common';
const API_URL = "escola/";

const create = (data) => {
    return http.mainInstance.post(API_URL + "create", {
        nome: data.nome,
        cnpj: data.cnpj,
        email: data.email,
        senha: data.senha,
        cep: data.cep,
        logradouro: data.endereco.logradouro,
        numero: data.endereco.numero,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        uf: data.endereco.uf
    });
};

const login = async (email, senha) => {
    const response = await http.mainInstance.post(API_URL + "login", {
        email,
        senha,
    });
    if (response.data) {
        localStorage.setItem("escola", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("escola");
};

const getCurrentEscola = () => {
    return JSON.parse(localStorage.getItem("escola"));
};

const EscolaService = {
    create,
    login,
    logout,
    getCurrentEscola,
}

export default EscolaService;