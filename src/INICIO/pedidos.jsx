import React from "react";
import "./Pedidos.css";

const pedidosExemplo = [
  {
    numero: 12,
    precoTotal: 25.50,
    produtos: ['Coxinha', 'Suco de Laranja', 'Brigadeiro'],
    dataPedido: '2024-05-01',
    nomeCliente: 'João Silva',
    formaPagamento: 'Pix'
  },
  {
    numero: 13,
    precoTotal: 15.00,
    produtos: ['Pastel de Queijo', 'Refrigerante'],
    dataPedido: '2024-05-03',
    nomeCliente: 'João Silva',
    formaPagamento: 'Cartão'
  }
];

const Pedidos = () => {
  return (
    <div className="caixa-pedidos">
      <div className="conteudo-pedidos">
        <h2>Histórico de Pedidos</h2>
        {pedidosExemplo.map((pedido, index) => (
          <div className="pedido-card" key={index}>
            <div className="pedido-header">
              <h3>Pedido #{pedido.numero}</h3>
              <span>{pedido.dataPedido}</span>
            </div>
            <div className="pedido-info">
              <div><strong>Cliente:</strong> {pedido.nomeCliente}</div>
              <div><strong>Pagamento:</strong> {pedido.formaPagamento}</div>
            </div>
            <ul className="produtos-lista">
              {pedido.produtos.map((produto, i) => (
                <li key={i}>{produto}</li>
              ))}
            </ul>
            <div className="total">Total: R$ {pedido.precoTotal.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedidos;
