import React from'react';
import './Menu.css';

const Menu = () => {
  const handleVoltar = () => {
    window.history.back(); // Função para voltar à página anterior
  };

  return (
    <div className="menu-container">
      <h1 className="menu-titulo">Escolha sua Delícia</h1>
      <button className="voltar-botao" onClick={handleVoltar}>Voltar</button>
      <div className="menu-itens">
        <div className="menu-item">
          <h2 className="menu-nome">Cheetos</h2>
          <p className="menu-descricao">Deliciosos Cheetos, crocantes e saborosos!</p>
          <p className="menu-preco">R$ 3,00</p>
          <button className="menu-botao">Adicionar ao Carrinho</button>
        </div>
        <div className="menu-item">
          <h2 className="menu-nome">Dolly</h2>
          <p className="menu-descricao">Bolinhos de chocolate, macios e irresistíveis!</p>
          <p className="menu-preco">R$ 2,50</p>
          <button className="menu-botao">Adicionar ao Carrinho</button>
        </div>
        <div className="menu-item">
          <h2 className="menu-nome">Fandangos</h2>
          <p className="menu-descricao">Coxinhas de frango, crocantes por fora e suaves por dentro!</p>
          <p className="menu-preco">R$ 4,00</p>
          <button className="menu-botao">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;