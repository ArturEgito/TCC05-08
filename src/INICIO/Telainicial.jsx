import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiShoppingCart, FiUser, FiSmartphone, FiChevronRight } from 'react-icons/fi';
import './Telainicial.css';

const Telainicial = () => {
  return (
    <div className="home-container">
      {/* Header com navegação */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-logo">FinnTech</h1>
          <nav className="nav-menu">
            {['Início', 'Menu', 'Perfil', 'Carrinho', 'Pedidos'].map((item) => {
              const rota = item === 'Perfil' ? '/paginaeditarperfil' : `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item}
                  to={rota}
                  className="nav-item"
                >
                  {item}
                  <div className="nav-underline"></div>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Seção Hero */}
      <section className="hero-section">
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-gradient">Cantina Inteligente</span>
              <br />
              do Futuro
            </h1>
            <p className="hero-description">
              Transforme sua experiência na cantina com tecnologia de ponta para pedidos rápidos, 
              pagamentos seguros e zero filas.
            </p>
            <div className="cta-group">
              <Link to="/menu" className="cta-button primary">
                Explorar Menu
                <FiChevronRight className="cta-icon" />
              </Link>
              <Link to="/pedidos" className="cta-button secondary">
                Meus Pedidos
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-animation"></div>
              <img 
                src="https://i.imgur.com/3Q1WcHy.png" 
                alt="App Preview" 
                className="app-preview" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="features-section">
        <div className="section-decor"></div>
        <h2 className="section-title">
          <span className="title-highlight">Porque escolher</span>
          <br />
          a FinnTech?
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ '--delay': index * 0.1 + 's' }}
            >
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-wave"></div>
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-title">FinnTech</h3>
            <p className="brand-slogan">Inovação em cada bite</p>
            <div className="social-links">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="social-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 FinnTech. Todos os direitos reservados.
          </p>
          <div className="legal-links">
            {['Termos de Uso', 'Política de Privacidade', 'Cookies'].map((item) => (
              <Link key={item} to="/legal" className="legal-item">{item}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Dados das features
const features = [
  {
    icon: <FiClock size={32} />,
    title: 'Agendamento Inteligente',
    description: 'Escolha ideal para retirada sem filas'
  },
  {
    icon: <FiShoppingCart size={32} />,
    title: 'Checkout Rápido',
    description: 'Pagamento seguro'
  },
  {
    icon: <FiUser size={32} />,
    title: 'Perfil Personalizado',
    description: 'Diversas formas de pagamento'
  },
  {
    icon: <FiSmartphone size={32} />,
    title: 'App Mobile',
    description: 'Disponível para  Android'
  }
];

// Dados das redes sociais
const socials = [
  { icon: <FiSmartphone />, link: '/' },
  { icon: <FiClock />, link: '/' },
  { icon: <FiShoppingCart />, link: '/' }
];

export default Telainicial;