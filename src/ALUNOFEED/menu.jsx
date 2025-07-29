import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import ProdutoService from '../services/services/ProdutoService';
import CarrinhoService from '../services/services/CarrinhoService';
import UsuarioService from '../services/services/UsuarioService';

const categorias = [
  'Todos',
  'Sorvete',
  'Bebida',
  'Salgadinhos',
  'Bolachas',
  'Doces',
  'Promoção'
];

const Menu = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await ProdutoService.findAll();
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        // Fallback para localStorage se API falhar
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
        setProdutos(produtosSalvos);
      }
    };
    carregarProdutos();
  }, []);

  const handleAdicionar = async (produto) => {
    const usuario = UsuarioService.getCurrentUser();
    
    if (!usuario) {
      alert('Faça login para adicionar produtos ao carrinho');
      navigate('/entraraluno');
      return;
    }

    try {
      await CarrinhoService.adicionarItem({
        produtoId: produto.id,
        quantidade: 1,
        usuarioId: usuario.id
      });
      
      // Fallback para navegação local
      const produtoFormatado = {
        id: Date.now(),
        nome: produto.nome,
        preco: Number(produto.preco),
        quantidade: 1,
        peso: produto.peso,
        volume: produto.volume,
        imagem: produto.imagem,
      };
      navigate('/carrinho', { state: { novoItem: produtoFormatado } });
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      // Fallback para funcionamento local
      const produtoFormatado = {
        id: Date.now(),
        nome: produto.nome,
        preco: Number(produto.preco),
        quantidade: 1,
        peso: produto.peso,
        volume: produto.volume,
        imagem: produto.imagem,
      };
      navigate('/carrinho', { state: { novoItem: produtoFormatado } });
    }
  };

  const produtosFiltrados = categoriaSelecionada === 'Todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="menu-container">
      <button className="voltar-botao" onClick={() => navigate(-1)}>
        <span className="seta">←</span> Voltar
      </button>

      <h1 className="menu-titulo">
        <span className="destaque-titulo">Nossas Delícias</span>
        <div className="linha-decorativa"></div>
      </h1>

      <div className="filtro-categorias">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`btn-categoria ${categoriaSelecionada === cat ? 'ativo' : ''}`}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-itens">
        {produtosFiltrados.length === 0 && (
          <p className="nenhum-produto">Nenhum produto encontrado nesta categoria.</p>
        )}

        {produtosFiltrados.map((produto) => (
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
              <div className="categoria-badge">{produto.categoria}</div>
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
