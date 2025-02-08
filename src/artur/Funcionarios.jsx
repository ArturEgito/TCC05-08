import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Funcionarios.css';

const Funcionarios = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    descricao: '',
    peso: '',
    unidade: 'g',
    preco: '',
    quantidade: ''
  });
  const [erro, setErro] = useState('');

  const handleVoltar = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const validarCampos = () => {
    if (!novoProduto.nome || !novoProduto.peso || !novoProduto.preco || !novoProduto.quantidade) {
      setErro('Preencha todos os campos obrigatórios!');
      return false;
    }
    if (isNaN(novoProduto.peso) || isNaN(novoProduto.preco) || isNaN(novoProduto.quantidade)) {
      setErro('Valores numéricos inválidos!');
      return false;
    }
    setErro('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCampos()) {
      setProdutos([...produtos, { ...novoProduto, id: Date.now() }]);
      setNovoProduto({
        nome: '',
        descricao: '',
        peso: '',
        unidade: 'g',
        preco: '',
        quantidade: ''
      });
    }
  };

  return (
    <div className="produtos-container">
      <button 
        className="voltar-botao" 
        onClick={handleVoltar}
      >
        ← Voltar
      </button>

      <h2>Cadastro de Produtos</h2>
      
      <form onSubmit={handleSubmit} className="form-produto">
        <div className="form-group">
          <label>Nome*:</label>
          <input
            type="text"
            name="nome"
            value={novoProduto.nome}
            onChange={handleInputChange}
            placeholder="Nome do produto"
          />
        </div>

        <div className="form-group">
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={novoProduto.descricao}
            onChange={handleInputChange}
            placeholder="Descrição do produto"
          />
        </div>

        <div className="form-group">
          <label>Peso/Volume*:</label>
          <div className="peso-group">
            <input
              type="number"
              name="peso"
              value={novoProduto.peso}
              onChange={handleInputChange}
              placeholder="Ex: 500"
              min="0"
            />
            <select
              name="unidade"
              value={novoProduto.unidade}
              onChange={handleInputChange}
            >
              <option value="g">Gramas (g)</option>
              <option value="ml">Mililitros (ml)</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Preço* (R$):</label>
          <input
            type="number"
            name="preco"
            value={novoProduto.preco}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            placeholder="0.00"
          />
        </div>

        <div className="form-group">
          <label>Quantidade*:</label>
          <input
            type="number"
            name="quantidade"
            value={novoProduto.quantidade}
            onChange={handleInputChange}
            min="0"
            placeholder="Quantidade em estoque"
          />
        </div>

        {erro && <div className="mensagem-erro">{erro}</div>}

        <button type="submit" className="botao-adicionar">
          Adicionar Produto
        </button>
      </form>

      <div className="tabela-produtos">
        <h3>Produtos Cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Peso/Volume</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.peso} {produto.unidade}</td>
                <td>R$ {Number(produto.preco).toFixed(2)}</td>
                <td>{produto.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funcionarios;