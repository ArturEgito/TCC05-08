import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiClock,
  FiShoppingCart,
  FiUser,
  FiSmartphone
} from 'react-icons/fi';
import './Telainicio.css';

const Telainicio = () => {
  return (
    <div className="main-container">
      {/* Header */}
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

      {/* Conteúdo principal */}
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Bem-vindo ao gerenciamento Inteligente</h1>
          <p className="hero-description">
            Impulsione suas vendas com nosso sistema inteligente de agendamento e pedidos online.
          </p>
          <Link to="/menu" className="cta-button">Ver Menu</Link>
        </section>

        {/* Seção de recursos */}
        <section className="features-grid">
          <FeatureCard
            icon={<FiClock className="feature-icon" />}
            title="Organizar"
            description="Organize o tempo da sua cantina na escola"
          />
          <FeatureCard
            icon={<FiShoppingCart className="feature-icon" />}
            title="Vendas"
            description="Gerencie suas vendas"
          />
          <FeatureCard
            icon={<FiUser className="feature-icon" />}
            title="Produtos"
            description="Cadastre seus produtos"
          />
          <FeatureCard
            icon={<FiSmartphone className="feature-icon" />}
            title="Acesso Mobile"
            description="Gerencie tudo diretamente do seu celular"
          />
        </section>
      </main>
    </div>
  );
};

// Componente reutilizável para os cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Telainicio;