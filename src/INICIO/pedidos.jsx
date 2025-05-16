import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pedidos.css';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarPedidos = () => {
      try {
        const dados = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(dados.reverse());
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    };
    carregarPedidos();
  }, []);

  const handleExcluirPedido = (numeroPedido) => {
    if (window.confirm('Deseja realmente excluir este pedido?')) {
      const novosPedidos = pedidos.filter(pedido => pedido.numero !== numeroPedido);
      localStorage.setItem('pedidos', JSON.stringify(novosPedidos.reverse()));
      setPedidos(novosPedidos);
    }
  };

  return (
    <div className="pedidos-container">
      <div className="pedidos-header">
        <button onClick={() => navigate(-1)} className="btn-voltar">
          &larr; Voltar
        </button>
        <h1>Histórico de Pedidos</h1>
      </div>

      {pedidos.length === 0 ? (
        <p className="sem-pedidos">Nenhum pedido encontrado</p>
      ) : (
        <div className="lista-pedidos">
          {pedidos.map(pedido => (
            <div className="pedido-card" key={pedido.numero}>
              <div className="pedido-header">
                <div>
                  <h2>Pedido #{pedido.numero.toString().slice(-6)}</h2>
                  <span>{new Date(pedido.dataPedido).toLocaleDateString()}</span>
                </div>
                <button 
                  className="btn-excluir"
                  onClick={() => handleExcluirPedido(pedido.numero)}
                >
                  Excluir
                </button>
              </div>

              <div className="pedido-info">
                <p><strong>Cliente:</strong> {pedido.nomeCliente}</p>
                <p><strong>Pagamento:</strong> {pedido.formaPagamento}</p>
              </div>

              <div className="produtos-lista">
                {pedido.produtos.map((produto, index) => (
                  <div className="produto-item" key={index}>
                    <span>{produto.nome}</span>
                    <div className="produto-info">
                      <span>x{produto.quantidade}</span>
                      <span>R$ {(produto.preco * produto.quantidade).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pedido-total">
                <span>Total:</span>
                <span>R$ {pedido.precoTotal.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pedidos;