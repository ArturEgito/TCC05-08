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
        setPedidos([...dados].reverse());
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    };
    carregarPedidos();
  }, []);

  const handleVoltar = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="pedidos-container">
      <div className="pedidos-header">
        <button onClick={handleVoltar} className="btn-voltar">
          &larr; Voltar
        </button>
        <h1>Meus Pedidos</h1>
      </div>

      {pedidos.length === 0 ? (
        <p className="sem-pedidos">Nenhum pedido encontrado</p>
      ) : (
        <div className="lista-pedidos">
          {pedidos.map(pedido => {
            const dataFormatada = pedido.dataPedido
              ? new Date(pedido.dataPedido).toLocaleDateString()
              : 'Data não disponível';
            const total = pedido.produtos
              ? pedido.produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0)
              : 0;

            return (
              <div className="pedido-card" key={pedido.numero}>
                <div className="pedido-header">
                  <div>
                    <h2>Pedido #{pedido.numero.toString().slice(-6)}</h2>
                    <span>{dataFormatada}</span>
                  </div>
                </div>

                <div className="pedido-info">
                  <p><strong>Cliente:</strong> {pedido.nomeCliente}</p>
                  <p><strong>Pagamento:</strong> {pedido.formaPagamento}</p>
                  <p><strong>Status:</strong> {pedido.status || 'em análise'}</p>
                  {pedido.status === 'cancelado' && (
                    <p><strong>Justificativa:</strong> {pedido.motivoCancelamento || pedido.justificativa}</p>
                  )}
                  {pedido.status === 'aceito' && (
                    <>
                      <p><strong>Nº do Pedido:</strong> {pedido.numeroPedido}</p>
                      <p><strong>Senha para retirada:</strong> {pedido.senhaPedido}</p>
                    </>
                  )}
                  {pedido.status === 'pago' && (
                    <p style={{ color: 'green', fontWeight: 'bold' }}>✔️ Pedido Pago</p>
                  )}
                </div>

                <div className="produtos-lista">
                  {pedido.produtos && pedido.produtos.map((produto, index) => (
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
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pedidos;
