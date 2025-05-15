import React, { useEffect, useState } from "react";
import "./Pedidos.css";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem("pedidos")) || [];
    setPedidos(pedidosSalvos.reverse()); // Mostrar o mais recente primeiro
  }, []);

  return (
    <div className="caixa-pedidos">
      <div className="conteudo-pedidos">
        <h2>Histórico de Pedidos</h2>
        {pedidos.length === 0 ? (
          <p>Nenhum pedido feito ainda.</p>
        ) : (
          pedidos.map((pedido, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Pedidos;
