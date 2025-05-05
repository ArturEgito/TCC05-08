import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiShoppingCart, FiUser, FiSmartphone } from 'react-icons/fi';
import './telainicio.css';

const Telainicio = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-logo">FinnTech</h1>
        <nav className="home-nav">
          <Link to="/telainicio" className="nav-link">Início</Link>
          <Link to="/historico" className="nav-link">Vendas</Link>
          <Link to="/funcionarios" className="nav-link">Produtos</Link>
          <Link to="/paginaeditarperfil" className="nav-link">Perfil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Bem-vindo ao gerenciamento Inteligente
          </h1>
          <p className="hero-description">
            Impulsione suas vendas com nosso sistema inteligente de agendamento e pedidos online.
          </p>
          <Link to="/menu" className="cta-button">
            Ver Menu
          </Link>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <FiClock className="feature-icon" />
            <h3>Organizar</h3>
            <p>Organize o tempo da sua cantina na escola</p>
          </div>
          
          <div className="feature-card">
            <FiShoppingCart className="feature-icon" />
            <h3>Vendas</h3>
            <p>Gerencie suas vendas</p>
          </div>
          
          <div className="feature-card">
            <FiUser className="feature-icon" />
            <h3>Produtos</h3>
            <p>Cadastre seus produtos</p>
          </div>
          
          <div className="feature-card">
            <FiSmartphone className="feature-icon" />
            <h3>Acesso Mobile</h3>
            <p>Gerencie tudo diretamente do seu celular</p>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="/" className="social-link"><FiSmartphone /></a>
            <a href="/" className="social-link"><FiClock /></a>
            <a href="/" className="social-link"><FiShoppingCart /></a>
          </div>
          <p>&copy; 2024 FinnTech. Todos os direitos reservados.</p>
          <p>Sistema de Gestão de Cantina Escolar</p>
        </div>
      </footer>
    </div>
  );
};

export default Telainicio;