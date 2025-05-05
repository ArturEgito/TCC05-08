import React, { useEffect, useState } from 'react';
import './carrinho.css';
import { useNavigate } from 'react-router-dom';


const Carrinho = () => { // Componente deve envolver toda a lógica
  const [items, setItems] = useState([ // Estado faltando na versão anterior
    {
      id: 1,
      nome: 'Refrigerante Dolly 200ml',
      preco: 2.5,
      quantidade: 2,
      imgSrc: 'https://i.ibb.co/R7CZR0v/1.png',
    },
    {
      id: 2,
      nome: 'Cheetos 125g',
      preco: 3.0,
      quantidade: 2,
      imgSrc: 'https://i.ibb.co/x330Zrk/2.png',
    },
  ]);

  const [total, setTotal] = useState(0);
  const [pagamento, setPagamento] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    atualizarTotal();
  }, [items]); // Executa sempre que os itens mudarem
    const atualizarTotal = () => {
      const subtotal = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
      setTotal(subtotal);
    };
  
    const handleIncrementar = (id) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id? {...item, quantidade: item.quantidade + 1 } : item
        )
      );
    };
  
    const handleDecrementar = (id) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id && item.quantidade > 1? {...item, quantidade: item.quantidade - 1 } : item
        )
      );
    };
  
    const handleRemover = (id) => {
      setItems((prevItems) => prevItems.filter((item) => item.id!== id));
    };
  
    const handlePagamentoChange = (e) => {
      setPagamento(e.target.value);
    };
  
    const handlePagar = () => {
      if (pagamento === 'dinheiro') {
        navigate('/dinheiro3'); // Redireciona para Dinheiro3 se o pagamento for em dinheiro
      } else if (pagamento === 'cartao') {
        navigate('/pagamentocartao'); // Redireciona para PagamentoCartao se o pagamento for em cartão
      } else if (pagamento === 'pix') {
        // Adicione lógica para pagamento em pix
        console.log('Pagamento em pix selecionado');
      }
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
                <img src={item.imgSrc} alt={item.nome} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{item.nome}</h3>
                  <p className="product-price">R$ {item.preco.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleDecrementar(item.id)}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantidade}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleIncrementar(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-right-section">
                  <p className="item-total">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemover(item.id)}
                  >
                    Remover
                  </button>
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
                <label className={`payment-option ${pagamento === 'dinheiro' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pagamento" 
                    value="dinheiro" 
                    onChange={handlePagamentoChange}
                  />
                  <div className="option-content">
                    <span>💵 Dinheiro</span>
                  </div>
                </label>

                <label className={`payment-option ${pagamento === 'cartao' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pagamento" 
                    value="cartao" 
                    onChange={handlePagamentoChange}
                  />
                  <div className="option-content">
                    <span>💳 Cartão</span>
                  </div>
                </label>

                <label className={`payment-option ${pagamento === 'pix' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="pagamento" 
                    value="pix" 
                    onChange={handlePagamentoChange}
                  />
                  <div className="option-content">
                    <span>📱 Pix</span>
                  </div>
                </label>
              </div>
            </div>

            <button 
              className="checkout-button" 
              disabled={!pagamento} 
              onClick={handlePagar}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carrinho;