import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = () => {
      const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
      setProdutos(produtosSalvos);
    };
    carregarProdutos();
  }, []);

  const handleAdicionar = (produto) => {
    const produtoFormatado = {
      id: Date.now(),
      nome: produto.nome,
      preco: Number(produto.preco),
      quantidade: 1,
      peso: produto.peso,
      volume: produto.volume,
      imagem: produto.imagem // Adicione esta linha se houver propriedade de imagem
    };
    navigate('/carrinho', { state: { novoItem: produtoFormatado } });
  };

  return (
    <div className="menu-container">
      <button className="voltar-botao" onClick={() => navigate(-1)}>
        <span className="seta">←</span> Voltar
      </button>
      
      <h1 className="menu-titulo">
        <span className="destaque-titulo">Nossas Delícias</span>
        <div className="linha-decorativa"></div>
      </h1>

      <div className="menu-itens">
        {produtos.map((produto) => (
          <div className="menu-item" key={produto.id}>
            {produto.imagem && (
              <div className="imagem-container">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="menu-imagem"
                  loading="lazy"
                />
                <div className="efeito-imagem"></div>
              </div>
            )}
            <div className="conteudo-item">
              <h2 className="menu-nome">{produto.nome}</h2>
              <div className="detalhes-produto">
                {produto.peso && <p className="menu-peso">⚖️ {produto.peso}</p>}
                {produto.volume && <p className="menu-volume">📦 {produto.volume}</p>}
              </div>
              <p className="menu-descricao">{produto.descricao}</p>
              <div className="preco-container">
                <p className="menu-preco">
                  {Number(produto.preco).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </p>
              </div>
              <button 
                className="menu-botao"
                onClick={() => handleAdicionar(produto)}
              >
                🛒 Adicionar
                <span className="efeito-botao"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;