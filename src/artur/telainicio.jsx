import React from 'react';
import './Telainicio.css';
import { Link } from 'react-router-dom'; // Importe o Link

const Telainicio = () => {
  return (
    <div className="home-container-nova">
      {/* Header com texto de marca ao invés de logo */}
      <header className="header-nova">
        <h1 className="logo-nova">FinnTech</h1> {/* Substituí a logo pela marca */}
        <nav className="nav-nova">
          <Link to="/" className="botao-link-nova nav-link-nova">Início</Link>
          <Link to="/funcionarios" className="botao-link-nova nav-link-nova">Funcionarios</Link>
          <Link to="/historico" className="botao-link-nova nav-link-nova">Historico</Link> 
          <Link to="/historico" className="botao-link-nova nav-link-nova">Vendas</Link> 
          <Link to="/paginaeditarperfil" className="telainicial-botao-link nav-link">Perfil</Link> {/* Alterado para telainicial-botao-link */}
        </nav>
      </header>

      {/* Seção principal com texto centralizado */}
      <section className="main-section-nova">
        <div className="main-text-nova">
          <h1>Bem-vindo ao Sistema de Estoque Escolar</h1>
          <p>
            Gerencie o estoque da escola de forma eficaz,
            com uma equipe inovadora e os recursos certos.
          </p>
        </div>
      </section>

      {/* Rodapé com círculos decorativos e link de marca */}
      <footer className="footer-nova">
        <div className="circle-grid-nova">
          <div className="circle-nova"></div>
          <div className="circle-nova"></div>
          <div className="circle-nova"></div>
          <div className="circle-nova"></div>
          <div className="circle-nova"></div>
        </div>
        <p className="footer-text-nova"> 2024 FinnTech.</p>
      </footer>
    </div>
  );
};

export default Telainicio;