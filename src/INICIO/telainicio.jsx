import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiClock,
  FiShoppingCart,
  FiUser,
  FiSmartphone,
  FiTrendingUp,
  FiStar
} from 'react-icons/fi';
import './telainicio-specific.css';

const Telainicio = () => {
  return (
    <div className="telainicio-container">
      {/* Header */}
      <header className="telainicio-header">
        <div className="telainicio-logo-container">
          <h1 className="telainicio-logo">🍽️ FinnFood</h1>
          <span className="telainicio-logo-subtitle">Cantina Inteligente</span>
        </div>
        <nav className="telainicio-nav">
          <Link to="/telainicio" className="telainicio-nav-link active">🏠 Início</Link>
          <Link to="/historico" className="telainicio-nav-link">📊 Vendas</Link>
          <Link to="/funcionarios" className="telainicio-nav-link">📦 Produtos</Link>
          <Link to="/paginaeditarperfil" className="telainicio-nav-link">👤 Perfil</Link>
          <Link to="/menu" className="telainicio-nav-link">🍕 Menu</Link>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="telainicio-main">
        <section className="telainicio-hero-section">
          <div className="telainicio-hero-content">
            <div className="telainicio-hero-badge">
              <FiStar className="telainicio-badge-icon" />
              <span>Sistema Premiado</span>
            </div>
            <h1 className="telainicio-hero-title">
              <span className="telainicio-title-highlight">Transforme</span> sua cantina em um
              <span className="telainicio-title-gradient"> negócio digital</span>
            </h1>
            <p className="telainicio-hero-description">
              Revolucione a gestão da sua cantina escolar com nossa plataforma completa.
              Controle vendas, gerencie produtos e ofereça uma experiência única aos seus clientes.
            </p>
            <div className="telainicio-hero-buttons">
              <Link to="/menu" className="telainicio-cta-primary">
                <FiShoppingCart className="telainicio-btn-icon" />
                Explorar Menu
                <span className="telainicio-btn-shine"></span>
              </Link>
              <Link to="/historico" className="telainicio-cta-secondary">
                <FiTrendingUp className="telainicio-btn-icon" />
                Ver Relatórios
              </Link>
            </div>
          </div>
          <div className="telainicio-hero-visual">
            <div className="telainicio-floating-card telainicio-card-1">
              <FiShoppingCart className="telainicio-card-icon" />
              <span>Vendas Online</span>
            </div>
            <div className="telainicio-floating-card telainicio-card-2">
              <FiClock className="telainicio-card-icon" />
              <span>Gestão Rápida</span>
            </div>
            <div className="telainicio-floating-card telainicio-card-3">
              <FiUser className="telainicio-card-icon" />
              <span>Clientes Felizes</span>
            </div>
          </div>
        </section>

        {/* Seção de recursos */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decoration">✨</span>
              Recursos Incríveis
              <span className="title-decoration">✨</span>
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="features-grid">
            <FeatureCard
              icon={<FiClock className="feature-icon" />}
              title="Gestão Inteligente"
              description="Organize horários, controle filas e otimize o atendimento da sua cantina"
              color="#ff6b6b"
            />
            <FeatureCard
              icon={<FiShoppingCart className="feature-icon" />}
              title="Vendas Digitais"
              description="Sistema completo de vendas com relatórios detalhados e análises em tempo real"
              color="#4ecdc4"
            />
            <FeatureCard
              icon={<FiUser className="feature-icon" />}
              title="Cadastro de Produtos"
              description="Gerencie seu estoque, preços e categorias de forma simples e eficiente"
              color="#45b7d1"
            />
            <FeatureCard
              icon={<FiSmartphone className="feature-icon" />}
              title="Acesso Mobile"
              description="Controle total da sua cantina direto do celular, a qualquer hora e lugar"
              color="#f9ca24"
            />
          </div>
        </section>

        {/* Seção de estatísticas */}
        <section className="telainicio-stats-section">
          <div className="telainicio-stats-grid">
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">500+</div>
              <div className="telainicio-stat-label">Produtos Vendidos</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">98%</div>
              <div className="telainicio-stat-label">Satisfação dos Clientes</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">24/7</div>
              <div className="telainicio-stat-label">Suporte Disponível</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">100+</div>
              <div className="telainicio-stat-label">Cantinas Ativas</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Componente reutilizável para os cards
const FeatureCard = ({ icon, title, description, color }) => (
  <div className="feature-card" style={{ '--card-color': color }}>
    <div className="card-header">
      <div className="icon-container">
        {icon}
        <div className="icon-glow"></div>
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
    <div className="card-footer">
      <span className="learn-more">Saiba mais →</span>
    </div>
  </div>
);

export default Telainicio;