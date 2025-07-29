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

const Telainicial = () => {
  return (
    <div className="telainicio-container">
      {/* Header */}
      <header className="telainicio-header">
        <div className="telainicio-logo-container">
          <h1 className="telainicio-logo">🍽️ FinnFood</h1>
          <span className="telainicio-logo-subtitle">Cantina Inteligente</span>
        </div>
        <nav className="telainicio-nav">
          <Link to="/telainicial" className="telainicio-nav-link active">🏠 Início</Link>
          <Link to="/menu" className="telainicio-nav-link">🍕 Menu</Link>
          <Link to="/carrinho" className="telainicio-nav-link">🛒 Carrinho</Link>
          <Link to="/paginaeditarperfil" className="telainicio-nav-link">👤 Perfil</Link>
          <Link to="/pedidos" className="telainicio-nav-link">📦 Pedidos</Link>
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
              <span className="telainicio-title-highlight">Sua</span> cantina
              <span className="telainicio-title-gradient"> digital favorita</span>
            </h1>
            <p className="telainicio-hero-description">
              Desfrute da melhor experiência em cantina escolar com nossa plataforma moderna.
              Peça seus lanches favoritos, pague com segurança e retire sem filas.
            </p>
            <div className="telainicio-hero-buttons">
              <Link to="/menu" className="telainicio-cta-primary">
                <FiShoppingCart className="telainicio-btn-icon" />
                Ver Menu
                <span className="telainicio-btn-shine"></span>
              </Link>
              <Link to="/pedidos" className="telainicio-cta-secondary">
                <FiTrendingUp className="telainicio-btn-icon" />
                Meus Pedidos
              </Link>
            </div>
          </div>
          <div className="telainicio-hero-visual">
            <div className="telainicio-floating-card telainicio-card-1">
              <FiShoppingCart className="telainicio-card-icon" />
              <span>Pedidos Rápidos</span>
            </div>
            <div className="telainicio-floating-card telainicio-card-2">
              <FiClock className="telainicio-card-icon" />
              <span>Sem Filas</span>
            </div>
            <div className="telainicio-floating-card telainicio-card-3">
              <FiUser className="telainicio-card-icon" />
              <span>Perfil Personalizado</span>
            </div>
          </div>
        </section>

        {/* Seção de recursos */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decoration">✨</span>
              Por que escolher FinnFood?
              <span className="title-decoration">✨</span>
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="features-grid">
            <FeatureCard
              icon={<FiClock className="feature-icon" />}
              title="Pedidos Rápidos"
              description="Faça seu pedido em segundos e retire no horário que escolher"
              color="#ff6b6b"
            />
            <FeatureCard
              icon={<FiShoppingCart className="feature-icon" />}
              title="Pagamento Seguro"
              description="Múltiplas formas de pagamento com total segurança"
              color="#4ecdc4"
            />
            <FeatureCard
              icon={<FiUser className="feature-icon" />}
              title="Perfil Personalizado"
              description="Histórico de pedidos e preferências salvas"
              color="#45b7d1"
            />
            <FeatureCard
              icon={<FiSmartphone className="feature-icon" />}
              title="Acesso Mobile"
              description="Use em qualquer dispositivo, a qualquer hora"
              color="#f9ca24"
            />
          </div>
        </section>

        {/* Seção de estatísticas */}
        <section className="telainicio-stats-section">
          <div className="telainicio-stats-grid">
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">1000+</div>
              <div className="telainicio-stat-label">Pedidos Realizados</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">99%</div>
              <div className="telainicio-stat-label">Satisfação dos Alunos</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">24/7</div>
              <div className="telainicio-stat-label">Disponível Sempre</div>
            </div>
            <div className="telainicio-stat-item">
              <div className="telainicio-stat-number">50+</div>
              <div className="telainicio-stat-label">Produtos Disponíveis</div>
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

export default Telainicial;