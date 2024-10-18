import React, { useEffect, useState } from'react';
import './Carrinho.css'; // Importando o CSS
import { useNavigate } from'react-router-dom'; // Importe o useNavigate

const Carrinho = () => {
  const [items, setItems] = useState([
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
  const navigate = useNavigate(); // Instancie o useNavigate

  useEffect(() => {
    atualizarTotal();
  }, [items]);

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
    <div>
      <header>
        <div className="logo">FinnTech</div>
        <nav>
          <ul>
            <li><a href="file:///Z:/work/artur/telainicial.html">Início</a></li>
            <li><a href="file:///Z:/work/isaac/pagina2Cheetos.html">Menu</a></li>
            <li><a href="file:///Z:/work/elias/contaaluno.html">Perfil</a></li>
          </ul>
        </nav>
        <div className="profile-icon">
          <i className="fas fa-user-circle"></i>
        </div>
      </header>

      <main>
        <div className="carrinho-container">
          <button id="continue-comprando" onClick={() => window.location.href='file:///Z:/work/isaac/pagina2Cheetos.html'}>
            ◀️Continue comprando
          </button>
         
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imgSrc} alt={item.nome} />
              <div className="item-info">
                <p>{item.nome}</p>
                <p>R${item.preco.toFixed(2)}</p>
              </div>
              <div className="item-quantidade">
                <button onClick={() => handleDecrementar(item.id)}>-</button>
                <input type="text" value={item.quantidade} readOnly />
                <button onClick={() => handleIncrementar(item.id)}>+</button>
              </div>
              <p className="item-total">R${(item.preco * item.quantidade).toFixed(2)}</p>
              <button className="item-remove" onClick={() => handleRemover(item.id)}>Excluir</button>
            </div>
          ))}
          <div className="total">
            <p>Subtotal</p>
            <p>R${total.toFixed(2)}</p>
          </div>
          <div className="pagamento-options">
            <input type="radio" id="dinheiro" name="pagamento" value="dinheiro" onChange={handlePagamentoChange} />
            <label htmlFor="dinheiro">Dinheiro</label>
            <input type="radio" id="cartao" name="pagamento" value="cartao" onChange={handlePagamentoChange} />
            <label htmlFor="cartao">Cartão</label>
            <input type="radio" id="pix" name="pagamento" value="pix" onChange={handlePagamentoChange} />
            <label htmlFor="pix">Pix</label>
          </div>
          <button id="pagar" disabled={!pagamento} onClick={handlePagar}>Pagar</button>
        </div>
      </main>
    </div>
  );
};

export default Carrinho;