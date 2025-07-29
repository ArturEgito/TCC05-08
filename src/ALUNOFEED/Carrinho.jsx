import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './carrinho.css';

const Carrinho = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const [total, setTotal] = useState(0);
  const [pagamento, setPagamento] = useState('');

  useEffect(() => {
    if (location.state?.novoItem) {
      adicionarItem(location.state.novoItem);
    }
  }, [location.state]);

  useEffect(() => {
    const subtotal = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    setTotal(subtotal);
  }, [items]);

  const adicionarItem = (novoItem) => {
    setItems((prevItems) => {
      const itemExistente = prevItems.find(item => item.nome === novoItem.nome);
      if (itemExistente) {
        return prevItems.map(item =>
          item.nome === novoItem.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevItems, novoItem];
      }
    });
  };

  const handleIncrementar = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item));
  };

  const handleDecrementar = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantidade > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    ));
  };

  const handleRemover = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handlePagamentoChange = (e) => {
    setPagamento(e.target.value);
  };


  const handlePagar = () => {
    if (!pagamento || items.length === 0) return;
  
    const novoPedido = {
      numero: Date.now(),
      precoTotal: total,
      produtos: items.map((item) => ({
        nome: item.nome,
        quantidade: item.quantidade,
        preco: item.preco
      })),
      dataPedido: new Date().toISOString(),
      nomeCliente: 'João Silva',
      formaPagamento: pagamento,
      status: 'pendente'
    };
  
    const pedidosAnteriores = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidosAnteriores.push(novoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidosAnteriores));
  
    navigate('/pedidos');
  };

  return (
    <div className="main-container">
      <main className="cart-main">
        <div className="carrinho-container">
          <button className="continue-shopping" onClick={() => window.history.back()}>
            ← Voltar às compras
          </button>

          <div className="items-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="product-info">
                  <h3 className="product-name">{item.nome}</h3>
                  <p className="product-price">R$ {item.preco.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => handleDecrementar(item.id)}>−</button>
                    <span className="quantity-value">{item.quantidade}</span>
                    <button className="quantity-btn" onClick={() => handleIncrementar(item.id)}>+</button>
                  </div>
                </div>
                <div className="item-right-section">
                  <p className="item-total">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => handleRemover(item.id)}>Remover</button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-section">
            <div className="total-container">
              <span>Subtotal:</span>
              <span className="total-value">R$ {total.toFixed(2)}</span>
            </div>

            <div className="payment-methods">
              <h3>Forma de pagamento</h3>
              <div className="payment-options">
                {['dinheiro', 'cartao', 'pix'].map((opcao) => (
                  <label key={opcao} className={`payment-option ${pagamento === opcao ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="pagamento"
                      value={opcao}
                      onChange={handlePagamentoChange}
                    />
                    <div className="option-content">
                      <span>
                        {opcao === 'dinheiro' && '💵 Dinheiro'}
                        {opcao === 'cartao' && '💳 Cartão'}
                        {opcao === 'pix' && '📱 Pix'}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="checkout-button" disabled={!pagamento} onClick={handlePagar}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carrinho;
