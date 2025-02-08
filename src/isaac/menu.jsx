import React from 'react';
import './Menu.css';

const Menu = () => {
  const handleVoltar = () => {
    window.history.back();
  };

  const produtos = [
    { 
      nome: "Cheetos", 
      descricao: "Crocantes e saborosos!", 
      preco: 3.00, 
      estoque: 15,
      peso: "90g"
    },
    { 
      nome: "Dolly", 
      descricao: "Refrigerante tradicional!", 
      preco: 2.50, 
      estoque: 8,
      volume: "350ml"
    },
    {
      nome: "Fandangos", 
      descricao: "Sabor queijo verde!", 
      preco: 4.00, 
      estoque: 12,
      peso: "80g"
    },
    { 
      nome: "Doritos", 
      descricao: "Tortilhas picantes!", 
      preco: 3.50, 
      estoque: 20,
      peso: "100g"
    },
    { 
      nome: "Ruffles", 
      descricao: "Batatas onduladas!", 
      preco: 4.50, 
      estoque: 10,
      peso: "85g"
    },
    { 
      nome: "Snickers", 
      descricao: "Barra de chocolate com amendoim!", 
      preco: 5.00, 
      estoque: 18,
      peso: "50g"
    },
  ];

  return (
    <div className="menu-container">
      <button className="voltar-botao" onClick={handleVoltar}>
        ← Voltar
      </button>
      
      <h1 className="menu-titulo">Escolha sua Delícia</h1>
      
      <div className="menu-itens">
        {produtos.map((produto, index) => (
          <div className="menu-item" key={index}>
            <h2 className="menu-nome">{produto.nome}</h2>
            <p className="menu-estoque">Estoque: {produto.estoque}</p>
            
            {/* Nova linha para peso/volume */}
            {produto.peso && <p className="menu-peso">Peso Líquido: {produto.peso}</p>}
            {produto.volume && <p className="menu-volume">Volume: {produto.volume}</p>}
            
            <p className="menu-descricao">{produto.descricao}</p>
            <p className="menu-preco">R$ {produto.preco.toFixed(2)}</p>
            <button className="menu-botao">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;