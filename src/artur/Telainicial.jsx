import React from'react';
import './Telainicial.css';
import { Link } from'react-router-dom'; // Importe o Link

const Telainicial = () => {
  return (
    <div className="telainicial-container"> {/* Alterado para telainicial-container */}
      {/* Header com texto de marca ao invés de logo */}
      <header className="telainicial-header"> {/* Alterado para telainicial-header */}
        <h1 className="telainicial-logo">FinnTech</h1> {/* Alterado para telainicial-logo */}
        <nav className="telainicial-nav"> {/* Alterado para telainicial-nav */}
          <Link to="/" className="telainicial-botao-link nav-link">Início</Link> {/* Alterado para telainicial-botao-link */}
          <Link to="/menu" className="telainicial-botao-link nav-link">Menu</Link> {/* Alterado para telainicial-botao-link */}
          <Link to="/paginaeditarperfil" className="telainicial-botao-link nav-link">Perfil</Link> {/* Alterado para telainicial-botao-link */}
          <Link to="/carrinho" className="telainicial-botao-link nav-link">Carrinho</Link> {/* Alterado para telainicial-botao-link */}
        </nav>
      </header>

      {/* Seção principal com texto centralizado */}
      <section className="telainicial-main-section"> {/* Alterado para telainicial-main-section */}
        <div className="telainicial-main-text"> {/* Alterado para telainicial-main-text */}
          <h1>Bem-vindo a cantina Escolar</h1>
          <p>
            Gerencie o seu tempo na fila da escola de forma eficaz,
            com a finntech.
          </p>
        </div>
      </section>

      {/* Rodapé com círculos decorativos e link de marca */}
      <footer className="telainicial-footer"> {/* Alterado para telainicial-footer */}
        <div className="telainicial-circle-grid"> {/* Alterado para telainicial-circle-grid */}
          <div className="telainicial-circle"></div> {/* Alterado para telainicial-circle */}
          <div className="telainicial-circle"></div> {/* Alterado para telainicial-circle */}
          <div className="telainicial-circle"></div> {/* Alterado para telainicial-circle */}
          <div className="telainicial-circle"></div> {/* Alterado para telainicial-circle */}
          <div className="telainicial-circle"></div> {/* Alterado para telainicial-circle */}
        </div>
        <p className="telainicial-footer-text"> 2024 FinnTech.</p> {/* Alterado para telainicial-footer-text */}
      </footer>
    </div>
  );
};

export default Telainicial;